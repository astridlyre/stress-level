import type { ActionFunction } from 'remix'
import { StressLevel, StressLevelType } from '~/stressLevel'
import { json, Link, useActionData, useCatch } from 'remix'
import { LoaderFunction, useLoaderData, Form } from 'remix'
import {
  MAX_STRESS_LEVEL,
  MIN_STRESS_LEVEL,
  DEFAULT_STRESS_STEP,
} from '~/stressLevel'
import { getStore, setStore } from '~/stressLevelProvider.server'
import { useClasses } from '~/hooks'
import * as Slider from '@radix-ui/react-slider'
import { useEffect, useState } from 'react'

type ActionData = {
  message: string
  level: 'good' | 'warning' | 'danger'
}

const LEVEL = 'level'
const goodRequest = (data: ActionData) => json(data, { status: 201 })
const badRequest = (data: ActionData) => json(data, { status: 400 })

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const level = form.get(LEVEL)

  if (typeof level !== 'string') {
    throw new Response('form not submitted correctly', { status: 422 })
  }

  const numLevel = Number.parseInt(level, 10)

  if (Number.isNaN(numLevel)) {
    return badRequest({ message: 'Unable to parse level!', level: 'danger' })
  }

  await setStore(numLevel)
  return goodRequest({ message: 'Saved!', level: 'good' })
}

export const loader: LoaderFunction = async () => {
  return await getStore()
}

const classFromLevel = (level: number, prefix: 'bg' | 'fg') =>
  prefix + '-' + (level < 33 ? 'good' : level < 66 ? 'warning' : 'danger')

export default function Index() {
  const data = useLoaderData<StressLevelType>()
  const actionData = useActionData<ActionData>()

  const [sl, setSL] = useState(data)
  const [showMessage, setShowMessage] = useState(false)

  const containerClasses = useClasses(
    'container',
    classFromLevel(sl.level, 'bg'),
  )

  const descriptionClasses = useClasses(
    'stress-header-description',
    classFromLevel(sl.level, 'fg'),
  )

  useEffect(() => {
    if (actionData?.message) {
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 3000)
    }
  }, [actionData, setShowMessage])

  return (
    <div className={containerClasses}>
      <main className='stress-o-meter'>
        <header className='stress-o-meter-header'>
          <h1 className='site-heading'>Kippum&apos;s Stress-o-Meter</h1>
          <p className='site-subheading'>How stressed is my Kippums?</p>
        </header>
        <section className='stress-meter-container'>
          <Slider.Root
            className='stress-meter'
            min={MIN_STRESS_LEVEL}
            max={MAX_STRESS_LEVEL}
            value={[sl.level]}
            step={DEFAULT_STRESS_STEP}
            onValueChange={([value]) => setSL(StressLevel(value))}
          >
            <Slider.Track className='stress-meter-track'>
              <Slider.Range
                className={`stress-meter-range ${classFromLevel(
                  sl.level,
                  'bg',
                )}`}
              />
            </Slider.Track>
            <Slider.Thumb className='stress-meter-thumb'>
              <div className='stress-meter-thumb-percent'>{sl.level}%</div>
            </Slider.Thumb>
          </Slider.Root>
          <header className='stress-header'>
            <small className='stress-header-small'>Current stress level:</small>
            <h2 className={descriptionClasses}>{sl.description}</h2>
          </header>
          <Form className='stress-form' method='post'>
            <input name={LEVEL} value={sl.level} type='hidden' />
            <div className='stress-form-button'>
              <button className='stress-meter-button bg-primary' type='submit'>
                Lock in stress level
              </button>
              {showMessage ? (
                <p
                  className={`stress-form-message`}
                  role='alert'
                  id='save-message'
                >
                  {actionData?.message}
                </p>
              ) : null}
            </div>
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
