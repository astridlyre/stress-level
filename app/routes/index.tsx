import type { Stress } from '~/stressLevel'
import { FormEvent, useCallback } from 'react'
import { DEFAULT_STRESS_LEVEL, StressLevel } from '~/stressLevel'
import { Link, useCatch } from 'remix'
import {
  MAX_STRESS_LEVEL,
  MIN_STRESS_LEVEL,
  DEFAULT_STRESS_STEP,
} from '~/stressLevel'
import { useClasses } from '~/hooks'
import * as Slider from '@radix-ui/react-slider'
import { useEffect, useState } from 'react'
import { useSocket } from '~/context'

type ActionData = {
  type: 'stress-update' | 'notification'
  message?: string
  quality: 'good' | 'warning' | 'danger'
}

const classFromQuality = (quality: string, prefix: 'bg' | 'fg') =>
  prefix + '-' + quality

export default function Index() {
  const socket = useSocket()
  const [sl, setSL] = useState<Stress>(StressLevel(DEFAULT_STRESS_LEVEL))
  const [actionData, setActionData] = useState<ActionData | undefined>()

  const containerClasses = useClasses(
    'container',
    classFromQuality(sl.quality, 'bg'),
  )

  const descriptionClasses = useClasses(
    'stress-header-description',
    classFromQuality(sl.quality, 'fg'),
  )

  const handleUpdate = useCallback(
    (data: Stress) => {
      setSL(data)
    },
    [setSL],
  )

  const handleNotification = useCallback(
    (data: ActionData) => {
      setActionData(data)
      setTimeout(() => setActionData(undefined), 3000)
    },
    [setActionData],
  )

  useEffect(() => {
    if (!socket) return
    socket.on('stress-update', handleUpdate)
    socket.on('notification', handleNotification)
    return () => {
      socket.off('stress-update', handleUpdate)
      socket.off('notification', handleNotification)
    }
  }, [socket])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    socket && socket.emit('stress-update', sl)
  }

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
            value={[sl?.level]}
            step={DEFAULT_STRESS_STEP}
            onValueChange={([value]) => setSL(StressLevel(value))}
          >
            <Slider.Track className='stress-meter-track'>
              <Slider.Range
                className={`stress-meter-range ${classFromQuality(
                  sl.quality,
                  'bg',
                )}`}
              />
            </Slider.Track>
            <Slider.Thumb className='stress-meter-thumb'>
              <div className='stress-meter-thumb-percent'>{sl?.level}%</div>
            </Slider.Thumb>
          </Slider.Root>
          <header className='stress-header'>
            <small className='stress-header-small'>Current stress level:</small>
            <h2 className={descriptionClasses}>{sl?.description}</h2>
          </header>
          <form className='stress-form' onSubmit={handleSubmit}>
            <div className='stress-form-button'>
              <button className='stress-meter-button bg-primary' type='submit'>
                Lock in stress level
              </button>
              {actionData ? (
                <p
                  className={`stress-form-message ${classFromQuality(
                    actionData.quality,
                    'fg',
                  )}`}
                  role='alert'
                  id='save-message'
                >
                  {actionData?.message}
                </p>
              ) : null}
            </div>
          </form>
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
