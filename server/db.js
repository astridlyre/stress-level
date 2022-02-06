/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
const { PrismaClient } = require('@prisma/client')

let db

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient()
  db.$connect()
} else {
  if (!global.__db) {
    global.__db = new PrismaClient()
    global.__db.$connect()
  }
  db = global.__db
}

module.exports = { db }
