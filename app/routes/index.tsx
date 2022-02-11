import type { Stress, ActionData } from '~/stressLevel'
import { useCallback } from 'react'
import { DEFAULT_STRESS_LEVEL, StressLevel } from '~/stressLevel'
import { useSocket } from '~/context'
import { Link, useCatch } from 'remix'
import { useEffect, useState } from 'react'
import { useClasses } from '~/hooks'
import { classFromQuality } from '~/utils'
import StressOMeter from '~/components/stress-o-meter'
import AddStressLevel from '~/components/add-stress-level'

export default function Index() {
  const socket = useSocket()
  const [stressLevels, setStressLevels] = useState<Stress[] | undefined>()

  const [currentStressLevel, setCurrentStressLevel] = useState<Stress>(
    StressLevel(DEFAULT_STRESS_LEVEL),
  )

  const [actionData, setActionData] = useState<ActionData | undefined>()
  const [showAddForm, setShowAddForm] = useState(false)

  const updateStressLevel = ([value]: number[]) => {
    const newStressLevel = stressLevels?.find((sl) => sl.level >= value)
    setCurrentStressLevel(newStressLevel!)
  }

  const containerClasses = useClasses(
    'container',
    classFromQuality(currentStressLevel.quality, 'bg'),
  )

  const handleUpdate = useCallback(
    (data: Stress[]) => {
      setShowAddForm(false)
      setStressLevels(data)
      setCurrentStressLevel(
        data.find((sl) => sl.isCurrent) ?? StressLevel(DEFAULT_STRESS_LEVEL),
      )
    },
    [setCurrentStressLevel],
  )

  const handleNotification = useCallback(
    (data: ActionData) => {
      setActionData(data)
      setTimeout(() => setActionData(undefined), 3000)
    },
    [setActionData],
  )

  const handleDelete = useCallback(() => {
    console.log(currentStressLevel)
    socket && socket.emit('delete-stress-level', currentStressLevel)
  }, [socket, currentStressLevel])

  useEffect(() => {
    if (!socket) return
    socket.on('stress-update', handleUpdate)
    socket.on('notification', handleNotification)
    return () => {
      socket.off('stress-update', handleUpdate)
      socket.off('notification', handleNotification)
    }
  }, [socket])

  return (
    <div className={containerClasses}>
      <main className='stress-o-meter'>
        {showAddForm ? (
          <AddStressLevel socket={socket} />
        ) : (
          <StressOMeter
            currentStressLevel={currentStressLevel}
            updateStressLevel={updateStressLevel}
            socket={socket}
            actionData={actionData}
          />
        )}
        <div className='justify-right'>
          {!showAddForm && (
            <button
              type='button'
              onClick={handleDelete}
              title='Delete level'
              className='stress-meter-button bg-danger'
            >
              Delete level
            </button>
          )}
          <button
            type='button'
            onClick={() => setShowAddForm(!showAddForm)}
            className='stress-meter-button bg-gray mr-auto'
          >
            {showAddForm ? 'Cancel' : 'Add new level'}
          </button>
        </div>
      </main>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  if (caught.status === 401) {
    return (
      <div className='container'>
        <h1>Oh no</h1>
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
