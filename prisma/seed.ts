import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const stressLevelDescriptions = [
  'Literally squirting',
  'Crookus kisses',
  'Picnic with Master',
  'Cuddled up, with a pillow on head',
  'Doordash came earlier than expected',
  'Nice warm shower',
  'Pretty, relaxed, and cute',
  'Not that stressed',
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
  'Having Covid and a flat-tire',
]

type Stress = {
  level: number
  description: string
}

async function seed() {
  let i = -5
  const levels: Stress[] = stressLevelDescriptions.map((desc) => ({
    level: (i += 5),
    description: desc,
    quality: i < 33 ? 'good' : i < 66 ? 'warning' : 'danger',
  }))
  return await Promise.all(
    levels.map((sl) => {
      console.log('creating ', sl)
      return db.stress.create({
        data: sl,
      })
    }),
  )
}

seed()
