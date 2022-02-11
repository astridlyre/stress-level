/* eslint-disable no-unused-vars */
import type { Stress, ActionData } from '~/stressLevel'
import type { Socket } from 'socket.io-client'
import { FormEvent } from 'react'
import { MAX_STRESS_LEVEL, MIN_STRESS_LEVEL } from '~/stressLevel'
import { useClasses } from '~/hooks'
import * as Slider from '@radix-ui/react-slider'
import { classFromQuality } from '~/utils'

type StressOMeterProps = {
  currentStressLevel: Stress
  updateStressLevel: (value: number[]) => void
  socket: Socket | undefined
  actionData: ActionData | undefined
}

export default function StressOMeter({
  currentStressLevel,
  updateStressLevel,
  socket,
  actionData,
}: StressOMeterProps) {
  const descriptionClasses = useClasses(
    'stress-header-description',
    classFromQuality(currentStressLevel.quality, 'fg'),
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    socket && socket.emit('stress-update', currentStressLevel)
  }

  return (
    <div>
      <header className='stress-o-meter-header'>
        <h1 className='site-heading'>
          Kippum&apos;s
          <br />
          Stress-o-Meter
        </h1>
        <p className='site-subheading'>How stressed is my Kippums?</p>
      </header>
      <section className='stress-meter-container'>
        <Slider.Root
          className='stress-meter'
          min={MIN_STRESS_LEVEL}
          max={MAX_STRESS_LEVEL}
          value={[currentStressLevel?.level]}
          onValueChange={updateStressLevel}
        >
          <Slider.Track className='stress-meter-track'>
            <Slider.Range
              className={`stress-meter-range ${classFromQuality(
                currentStressLevel.quality,
                'bg',
              )}`}
            />
          </Slider.Track>
          <Slider.Thumb className='stress-meter-thumb'>
            <div className='stress-meter-thumb-percent'>
              {currentStressLevel?.level}%
            </div>
          </Slider.Thumb>
        </Slider.Root>
        <header className='stress-header'>
          <small className='stress-header-small'>Current stress level:</small>
          <h2 className={descriptionClasses}>
            {currentStressLevel?.description}
          </h2>
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
    </div>
  )
}
