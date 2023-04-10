/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: DataTypes.STRING
    }, {
        tableName: 'categories',
        underscored: true,
        timestamps: false,
    })

    categoryTable.associate = (models) => {
        categoryTable.hasMany(models.PostCategory, {
            foreignKey: 'category_id',
            as: 'posts_categories',
        });
    }
    return categoryTable;
}