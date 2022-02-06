/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const { createServer } = require('http')

const app = express()
const server = createServer(app)

module.exports = {
  app,
  server,
}
