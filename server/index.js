/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createRequestHandler } = require('@remix-run/express')
const { app } = require('./app.js')
const { logger, wrap } = require('./middleware.js')
const { server, getCurrentLevel } = require('./io.js')

const ENV = process.env.NODE_ENV
const BUILD_DIR = path.join(process.cwd(), 'server/build')

wrap(app)

app.get('/current', async (_req, res) => {
  const currentLevel = await getCurrentLevel()
  if (!currentLevel) {
    return res.statusCode(404).send('No stress level found! How stressful!')
  }
  const text = `Current stress level is: ${currentLevel.description} (${currentLevel.level}%)`
  return res.send(text)
})

app.all(
  '*',
  ENV === 'production'
    ? createRequestHandler({ build: require('./build') })
    : (req, res, next) => {
        purgeRequireCache()
        const build = require('./build')
        return createRequestHandler({ build, mode: ENV })(req, res, next)
      },
)

const port = process.env.PORT || 3000

server.listen(port, () => {
  logger.info(`Express server listening on port ${port}`)
})

function purgeRequireCache() {
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key]
    }
  }
}
