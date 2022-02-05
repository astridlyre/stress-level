import path from 'path'
import fs from 'fs/promises'
import {
  StressLevel,
  DEFAULT_STRESS_LEVEL,
  MAX_STRESS_LEVEL,
  MIN_STRESS_LEVEL,
} from './stressLevel'

const storePath = path.join(__dirname, '..', 'store')
const fileName = 'stress.json'

type StressFile = {
  level: number
}

export async function getStore() {
  const fallback = StressLevel(DEFAULT_STRESS_LEVEL)
  try {
    const file = await fs.readFile(path.join(storePath, fileName), 'utf8')

    if (!file) {
      return fallback
    }

    const store = JSON.parse(file) as StressFile
    return store.level >= MIN_STRESS_LEVEL && store.level <= MAX_STRESS_LEVEL
      ? StressLevel(store.level)
      : fallback
  } catch {
    return fallback
  }
}

export async function setStore(input: number) {
  const level = Math.min(MAX_STRESS_LEVEL, Math.max(MIN_STRESS_LEVEL, input))
  try {
    await fs.writeFile(
      path.join(storePath, fileName),
      JSON.stringify({ level }),
      { encoding: 'utf8' },
    )
    return StressLevel(level)
  } catch (err) {
    console.error(err)
    return null
  }
}
