const { Model, DataTypes, Sequelize } = require('sequelize')
const {CLIENT_TABLE} = require('./client.model')
const CAR_TABLE = "cars"

const CarSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  brand: {
    allowNull: false,
    type: DataTypes.STRING
  },
  modelCar:{
    allowNull: false,
    field: 'model_car',
    type: DataTypes.STRING
  },
  age: {
    allowNull: false,
    type: DataTypes.STRING
  },
  placa: {
    allowNull: false,
    type: DataTypes.STRING
  },
  clientId:{
    field: 'client_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: CLIENT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Car extends Model {
  static associate(models) {
    this.belongsTo(models.Client, {
      onDelete: 'cascade',
      as: 'report'
    })
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: CAR_TABLE,
      modelName: 'Car',
      timestamps: false
    }
  }
}

module.exports = { Car, CarSchema, CAR_TABLE }
