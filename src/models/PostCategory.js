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
        PostCategoryTable.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'users'
        });
        PostCategoryTable.hasMany(models.PostCategory, {
            foreignKey: 'post_id',
            as: 'posts_categories',
        });
    }
    return PostCategoryTable;
}