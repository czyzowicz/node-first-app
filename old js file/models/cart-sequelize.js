const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const CartSequelize = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = CartSequelize;
