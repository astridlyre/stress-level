import { db } from '~/db'
import {
  StressLevel,
  DEFAULT_STRESS_LEVEL,
  MAX_STRESS_LEVEL,
  MIN_STRESS_LEVEL,
} from './stressLevel'

export type Stress = {
  level: number
  description: string
  isCurrent?: boolean
}

export async function getStress() {
  const fallback = StressLevel(DEFAULT_STRESS_LEVEL)
  try {
    const currentLevel = await db.stress.findFirst({
      where: { isCurrent: true },
    })
    if (!currentLevel) {
      return fallback
    }
    return currentLevel
  } catch {
    return fallback
  }
}

export async function setStress(input: number) {
  const level = Math.min(MAX_STRESS_LEVEL, Math.max(MIN_STRESS_LEVEL, input))
  try {
    await db.stress.updateMany({
      data: { isCurrent: false },
      where: { isCurrent: true },
    })
    await db.stress.updateMany({
      data: { isCurrent: true },
      where: { level },
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
