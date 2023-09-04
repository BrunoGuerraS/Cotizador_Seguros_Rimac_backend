const express = require('express')
const clientRouter = require('./client.router')

function routerApi(app){
  const router = express.Router()
  app.use('/api/v1', router)
  // router.use('/users', )
  router.use('/client', clientRouter)

}

module.exports = routerApi
