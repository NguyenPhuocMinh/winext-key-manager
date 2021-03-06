'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permissions', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      createdBy: { type: Sequelize.STRING },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedBy: { type: Sequelize.STRING },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('permissions');
  },
};
