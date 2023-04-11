/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */


module.exports = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: { type: DataTypes.STRING, foreignKey: true },
        published: DataTypes.DATE,
        updated: DataTypes.DATE
    }, 
    {
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,
    })

    BlogPostTable.associate = (models) => {
        BlogPostTable.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    }
    return BlogPostTable;
}