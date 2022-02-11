import type { FormEvent, BaseSyntheticEvent } from 'react'
import type { Socket } from 'socket.io-client'
import { DEFAULT_STRESS_LEVEL, Stress } from '~/stressLevel'
import { MAX_STRESS_LEVEL, MIN_STRESS_LEVEL } from '~/stressLevel'
import * as Slider from '@radix-ui/react-slider'
import { useState } from 'react'
import { classFromQuality } from '~/utils'

type AddStressLevelProps = {
  socket: Socket | undefined
}

const newStressLevel = (level: number, description: string): Stress => ({
  level,
  description,
  quality: level < 33 ? 'good' : level < 66 ? 'warning' : 'danger',
})

export default function AddStressLevel({ socket }: AddStressLevelProps) {
  const [stressLevel, setStressLevel] = useState<Stress>(
    newStressLevel(DEFAULT_STRESS_LEVEL, ''),
  )

  const updateDesc = (e: BaseSyntheticEvent) => {
    setStressLevel((sl) => newStressLevel(sl.level, e.target.value))
  }

  const updateLevel = ([value]: number[]) => {
    setStressLevel((sl) => newStressLevel(value, sl.description))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(stressLevel)
    socket && socket.emit('new-stress-level', stressLevel)
  }

  return (
    <div className='mb-1'>
      <header className='stress-o-meter-header'>
        <h1 className='site-heading'>Add stress level</h1>
        <p className='site-subheading'>Create a new level of stress</p>
      </header>
      <form className='add-form' onSubmit={handleSubmit}>
        <label htmlFor='sl-description' className='labeled-input'>
          Description
          <input
            onChange={updateDesc}
            value={stressLevel.description}
            className='input'
            type='text'
          />
        </label>
        <label htmlFor='sl-intensity' className='labeled-input'>
          <p className='mb-base'>Intensity</p>
          <Slider.Root
            className='stress-meter'
            min={MIN_STRESS_LEVEL}
            max={MAX_STRESS_LEVEL}
            value={[stressLevel?.level]}
            step={1}
            onValueChange={updateLevel}
          >
            <Slider.Track className='stress-meter-track'>
              <Slider.Range
                className={`stress-meter-range ${classFromQuality(
                  stressLevel.quality,
                  'bg',
                )}`}
              />
            </Slider.Track>
            <Slider.Thumb className='stress-meter-thumb'>
              <div className='stress-meter-thumb-percent'>
                {stressLevel?.level}%
              </div>
            </Slider.Thumb>
          </Slider.Root>
        </label>
        <button title='Save' className='stress-meter-button bg-warning mt-sm'>
          Save
        </button>
      </form>
    </div>
  )
}
