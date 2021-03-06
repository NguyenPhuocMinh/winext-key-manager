'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TokenModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.RealmModel, { as: 'realm', foreignKey: 'realmID' });
    }
  }
  TokenModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      signatureAlgorithm: {
        type: DataTypes.ENUM,
        values: ['RS256', 'HS256'],
      },
      expired: { type: DataTypes.INTEGER },
      // filter
      realmName: { type: DataTypes.STRING },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      createdBy: { type: DataTypes.STRING },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedBy: { type: DataTypes.STRING },
    },
    {
      sequelize,
      tableName: 'tokens',
      modelName: 'Token',
      timestamps: false,
    }
  );

  return TokenModel;
};
