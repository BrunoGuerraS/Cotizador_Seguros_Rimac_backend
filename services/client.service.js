const { models } = require('../libs/sequelize')

class ClientService {
  constructor () {}
  async create (data) {

  }

  async find () {
    const clients = await models.Client.findAll()
    return clients
  }
}

module.exports = ClientService
