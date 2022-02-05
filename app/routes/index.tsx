import type { StressLevelType } from '~/stressLevel'
import { ActionFunction, Link, useCatch } from 'remix'
import { LoaderFunction, useLoaderData, Form } from 'remix'
import {
  MAX_STRESS_LEVEL,
  MIN_STRESS_LEVEL,
  DEFAULT_STRESS_STEP,
} from '~/stressLevel'
import { getStore, setStore } from '~/stressLevelProvider.server'
import { useClasses } from '~/hooks'

const TYPE = 'type'
const LEVEL = 'level'
const MORE_TYPE = 'more'
const LESS_TYPE = 'less'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const level = form.get(LEVEL)
  const type = form.get(TYPE)

  if (typeof level !== 'string' || typeof type !== 'string') {
    throw new Response('form not submitted correctly', { status: 422 })
  }

  const numLevel = Number.parseInt(level, 10)

  if (Number.isNaN(numLevel)) {
    throw new Response('unable to parse level', { status: 422 })
  }

  if (type === MORE_TYPE) {
    return await setStore(numLevel + DEFAULT_STRESS_STEP)
  }
  return await setStore(numLevel - DEFAULT_STRESS_STEP)
}

export const loader: LoaderFunction = async () => {
  return await getStore()
}

const classFromLevel = (level: number, prefix: 'bg' | 'fg') =>
  prefix + '-' + (level < 33 ? 'good' : level < 66 ? 'warning' : 'danger')

export default function Index() {
  const sl = useLoaderData<StressLevelType>()

  const containerClasses = useClasses(
    'container',
    classFromLevel(sl.level, 'bg'),
  )

  const descriptionClasses = useClasses(
    'stress-header-description',
    classFromLevel(sl.level, 'fg'),
  )

  return (
    <div className={containerClasses}>
      <main className='stress-o-meter'>
        <header className='stress-o-meter-header'>
          <h1 className='site-heading'>Kippum&apos;s Stress-o-Meter</h1>
          <p className='site-subheading'>How stressed is my Kippums?</p>
        </header>
        <section className='stress-meter-container'>
          <Form className='stress-form' method='post'>
            <input name={LEVEL} value={sl.level} type='hidden' />
            <meter
              className='stress-meter'
              high={69}
              optimum={20}
              min={MIN_STRESS_LEVEL}
              max={MAX_STRESS_LEVEL}
              value={sl.level}
            ></meter>
            <header className='stress-header'>
              <small className='stress-header-small'>
                Current stress level:
              </small>
              <h2 className={descriptionClasses}>
                {sl.description} ({sl.level})
              </h2>
            </header>
            <button
              className='stress-meter-button bg-good'
              type='submit'
              name={TYPE}
              value={LESS_TYPE}
            >
              Less stressed
            </button>
            <button
              className='stress-meter-button bg-danger'
              type='submit'
              name={TYPE}
              value={MORE_TYPE}
            >
              More stressed
            </button>
          </Form>
        </section>
      </main>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  if (caught.status === 401) {
    return (
      <div className='container'>
        <h1></h1>
      </div>
    )
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <div className='container'>
      <h1>Whoops! Something went wrong</h1>
      <p>
        Oh dear me, apparently: {error.message}... Shall we{' '}
        <Link to='/'>Try again?</Link>
      </p>
    </div>
  )
}
