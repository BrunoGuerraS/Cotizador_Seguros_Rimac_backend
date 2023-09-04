const {Client, ClientSchema} = require('./client.model')
const {Car, CarSchema} = require('../models/car.model')
const {Promo, PromotSchema} = require('../models/promo.model')

function setupModels(sequelize){
  Client.init(ClientSchema, Client.config(sequelize))
  Promo.init(PromotSchema, Promo.config(sequelize))
  Car.init(CarSchema, Car.config(sequelize))

  Promo.associate(sequelize.models)
  Client.associate(sequelize.models)
  Car.associate(sequelize.models)
}

module.exports = setupModels
