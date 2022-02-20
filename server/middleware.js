/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const pino = require('pino')
const pinoHttp = require('pino-http')

const logger = pino({
  pretty: true,
})

function wrap(app) {
  app.use(compression())
  app.use(express.static('public', { maxAge: '1h' }))
  app.use(express.static('public/build', { immutable: true, maxAge: '1y' }))
  app.use(pinoHttp({ logger }))
}

module.exports = { logger, wrap }
