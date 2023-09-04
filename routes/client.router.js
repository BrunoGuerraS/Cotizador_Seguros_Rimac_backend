const express = require('express')
const router = express.Router()
const ClientService = require('../services/client.service')
const service = new ClientService()

router.get('/', async (req, res) => {
  try {
    const clients = await service.find()
    console.log("=> ", clients)
    res.status(201).json(clients)
  } catch (error) {

    console.log(error)
    res.status.json(error)
  }
})

router.get('/:id', async () => {

})

router.post('/', async () => {

})

router.delete('/:id', async () => {

})

module.exports = router
