const  { Model } = require('sequelize');
const  Sequelize = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
        name        : DataTypes.STRING,
        email       : DataTypes.STRING,
        password    : DataTypes.STRING,
        birthday    : DataTypes.DATE,
        gender      : DataTypes.BOOLEAN,
        status      : DataTypes.BOOLEAN
    });
  }
}

module.exports = new User();