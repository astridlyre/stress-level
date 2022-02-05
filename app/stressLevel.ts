export const MIN_STRESS_LEVEL = 0
export const MAX_STRESS_LEVEL = 100
export const DEFAULT_STRESS_LEVEL = 10
export const DEFAULT_STRESS_STEP = 5

const stressLevelDescriptions = [
  'Cuddled up, with a pillow on head',
  'Pretty, relaxed, and cute',
  'Not very stressed',
  'Slightly tense',
  'A bit sad and preoccupied',
  'Tail is thwomping a bit',
  'Whiskers are a little twitchy',
  'Whiskers are pulled a bit too hard',
  'The power is out, it is storming, and the heat is not working',
  'The NFT wallet transfer is not working',
]

export type StressLevelType = {
  level: number
  description: string
}

function getDescriptionForStressLevel(level: number) {
  return stressLevelDescriptions[Math.floor(level / 10 - 1)] || 'Not stressed'
}

export function StressLevel(level: number) {
  return { level, description: getDescriptionForStressLevel(level) }
}
