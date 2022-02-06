/* eslint-disable @typescript-eslint/no-var-requires */
const { Server } = require('socket.io')
const { logger } = require('./middleware.js')
const { server } = require('./app.js')
const { db } = require('./db.js')
const {
  StressLevel,
  DEFAULT_STRESS_LEVEL,
  MIN_STRESS_LEVEL,
  MAX_STRESS_LEVEL,
} = require('./stressLevel.js')

const io = new Server(server)

io.on('connection', async (socket) => {
  logger.info(socket.id, 'connected')
  socket.emit('stress-update', await getStress())

  socket.on('stress-update', async (data) => {
    await setStress(data)

    socket.emit('stress-update', await getStress())
    socket.emit('notification', {
      message: 'Updated stress level',
      quality: 'good',
    })
  })
})

async function getStress() {
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

module.exports = { io, server }
