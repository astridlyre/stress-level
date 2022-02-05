export const MIN_STRESS_LEVEL = 0
export const MAX_STRESS_LEVEL = 100
export const DEFAULT_STRESS_LEVEL = 10
export const DEFAULT_STRESS_STEP = 5

const stressLevelDescriptions = [
  'Literally squirting',
  'Crookus kisses',
  'Picnic with Master',
  'Cuddled up, with a pillow on head',
  'Doordash came earlier than expected',
  'Nice warm shower',
  'Pretty, relaxed, and cute',
  'Not very stressed',
  'Slightly tense',
  'Season finale of Project Runway',
  'A bit sad and preoccupied',
  'Tail is thwomping a bit',
  'Whiskers are a little twitchy',
  'Whiskers are pulled a bit too hard',
  'Bitcoin all-time low',
  'Period time times',
  'Home2 sold out, IU basketball night, New Jersey Hilton-Honors Diamond Member sorority mom yelling about the hole in her wall that her husband punched',
  "Master's wifi went out",
  'The power is out, it is storming, and the heat is not working',
  'The NTF wallet transfer is not working',
  'Having Covid and a flat-time',
]

export type StressLevelType = {
  level: number
  description: string
}

function getDescriptionForStressLevel(level: number) {
  return stressLevelDescriptions[level / 5] || 'Not stressed'
}

export function StressLevel(level: number) {
  return { level, description: getDescriptionForStressLevel(level) }
}
