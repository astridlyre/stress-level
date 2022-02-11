/* eslint-disable @typescript-eslint/no-var-requires */
const { Server } = require('socket.io')
const { logger } = require('./middleware.js')
const { server } = require('./app.js')
const { db } = require('./db.js')
const { MIN_STRESS_LEVEL, MAX_STRESS_LEVEL } = require('./stressLevel.js')

const io = new Server(server)

io.on('connection', async (socket) => {
  logger.info(socket.id, 'connected')
  socket.emit('stress-update', await getStress())

  socket.on('stress-update', async (data) => {
    await setStress(data)

    io.emit('stress-update', await getStress())
    io.emit('notification', {
      message: 'Updated stress level',
      quality: 'good',
    })
  })

  socket.on('new-stress-level', async (data) => {
    await newStress(data)
    io.emit('stress-update', await getStress())
    io.emit('notification', {
      message: 'New stress level has been added',
      quality: 'good',
    })
  })

  socket.on('delete-stress-level', async (data) => {
    await deleteStress(data)
    io.emit('stress-update', await getStress())
    io.emit('notification', {
      message: 'Stress level deleted',
      quality: 'danger',
    })
  })
})

async function getStress() {
  try {
    const stressLevels = await db.stress.findMany({ orderBy: { level: 'asc' } })
    return stressLevels
  } catch {
    return []
  }
}

async function setStress(sl) {
  const level = Math.min(MAX_STRESS_LEVEL, Math.max(MIN_STRESS_LEVEL, sl.level))
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

async function newStress(sl) {
  if (sl.level > 100) {
    sl.level = 100
    sl.quality = 'danger'
  } else if (sl.level < 0) {
    sl.level = 0
    sl.quality = 'good'
  }
  try {
    const found = await db.stress.findUnique({ where: { level: sl.level } })
    if (found) {
      const newStressLevel = await db.stress.updateMany({
        where: { level: sl.level },
        data: sl,
      })
      return newStressLevel
    } else {
      const newStressLevel = await db.stress.create({
        data: sl,
        select: { level: true, description: true, quality: true },
      })
      return newStressLevel
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

async function deleteStress(sl) {
  try {
    await db.stress.delete({ where: { id: sl.id } })
    return true
  } catch (err) {
    return false
  }
}

module.exports = { io, server }
