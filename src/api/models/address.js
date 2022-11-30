'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {}

  Address.init(
    {
      street: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      state: { type: DataTypes.STRING, allowNull: false },
      postalCode: { type: DataTypes.INTEGER, allowNull: true },
    },
    { sequelize, modelName: 'Address' }
  );
  return Address;
};
