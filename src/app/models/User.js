'use strict';
const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

    }
  };
  User.init({
      name        : DataTypes.STRING,
      email       : DataTypes.STRING,
      password    : DataTypes.STRING,
      birthday    : DataTypes.DATE,
      gender      : DataTypes.BOOLEAN,
      status      : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tb_users',
    timestamps: true
  });
  return User;
};
