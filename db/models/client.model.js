const { Model, DataTypes, Sequelize } = require('sequelize')

const CLIENT_TABLE = "clients"

const ClientSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    field: 'last_name',
    type: DataTypes.STRING
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING
  },

}

class Client extends Model {
  static associate(models) {
    this.belongsTo(models.Promo, {
      as: 'promo'
    })
    this.hasMany(models.Car, {
      as: 'cars',
      foreignKey: 'clientId',
      onDelete: 'cascade',
      hooks: true
    })
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timestamps: false
    }
  }
}

module.exports = { Client, ClientSchema, CLIENT_TABLE }
