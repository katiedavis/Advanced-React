//this file connects to the remote prisma db and gives it the ability to query it with javascript

const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  sercret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
