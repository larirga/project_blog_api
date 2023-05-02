'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.STRING },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
      },
      published: {
        defaultValue: Sequelize.literal('NOW()'),
        type: Sequelize.DATE,
      },
      updated: {
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     */
    await queryInterface.dropTable('blog_posts');
  }
};
