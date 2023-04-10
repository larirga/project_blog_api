/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tableName: 'users',
        underscored: true,
        timestamps: false,
    })

    userTable.associate = (models) => {
        userTable.hasMany(models.BlogPost, {
            foreignKey: 'user_id',
            as: 'blog_posts'
        })
    }

    return userTable;
}