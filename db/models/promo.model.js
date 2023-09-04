const { Model, DataTypes, Sequelize } = require('sequelize')

const PROMO_TABLE = "promo"

const PromotSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  monto: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  description:{
    allowNull: true,
    type: DataTypes.INTEGER
  }

}

class Promo extends Model {
  static associate() {}
  static config(sequelize) {
    return{
      sequelize,
      tableName: PROMO_TABLE,
      modelName: 'Promo',
      timestamps: false
    }
  }
}

module.exports = {Promo, PromotSchema, PROMO_TABLE}
