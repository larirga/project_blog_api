/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
        postId: { 
            type: DataTypes.INTEGER, foreignKey: true 
        },
        categoryId: { 
            type: DataTypes.INTEGER, foreignKey: true 
        }
    }, 
    {
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false,
    })

    PostCategoryTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            through: PostCategoryTable, 
            foreignKey: 'categoryId',
            as: 'categories'
        });
        models.Category.belongsToMany(models.BlogPost, {
            through: PostCategoryTable, 
            foreignKey: 'postId',
            as: 'posts',
        });
    }
    return PostCategoryTable;
}