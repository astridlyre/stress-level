/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createRequestHandler } = require('@remix-run/express')
const { app } = require('./app.js')
const { logger, wrap } = require('./middleware.js')
const { server } = require('./io.js')

const ENV = process.env.NODE_ENV
const BUILD_DIR = path.join(process.cwd(), 'server/build')

wrap(app)
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
