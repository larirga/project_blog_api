const { BlogPost, Category, User, PostCategory } = require('../models');
const categoryService = require('./category.service');

const getAllPost = async () => {
    const allPosts = await BlogPost.findAll({
        include: [
            { model: User, 
                as: 'user', 
                attributes: { exclude: ['password'] },
            },
            { model: Category,
                as: 'categories',
                through: { attributes: [] },
        },
        ],
    });
    return allPosts;
};

// const insertId = async (postId, categoryId) => {
//     const arrayId = categoryId.map((e) => ({ postId, categoryId: e }));
//     await PostCategory.bulkCreate(arrayId);
// };

const createPost = async (body, user) => {
    const categories = await categoryService.getAllCategories();

    const categoryId = categories.map((e) => e.id);

    const insertId = await PostCategory.bulkCreate(categoryId);

    console.log(insertId);

    console.log(categoryId);

    const create = await BlogPost.create({
        ...body, userId: user.user.id, 
    });
    return create;
};

module.exports = {
    getAllPost,
    createPost,
};