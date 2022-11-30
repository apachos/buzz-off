'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // see https://codebysamgan.com/how-to-create-model-association-in-sequelize-express-js-node-js
      // this.belongsTo(models.Attraction, {as: 'Attraction'});
      // FIXME this not working
      Attraction.belongsTo(models.Address, { as: 'address', onDelete: 'CASCADE', hooks: true });
    }
  }
  Attraction.init(
    {
      id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING(500), allowNull: false },
      site: { type: DataTypes.STRING, allowNull: true },
      rank: { type: DataTypes.INTEGER, allowNull: true },
    },
    { sequelize, modelName: 'Attraction' }
  );
  return Attraction;
};
