const postService = require('../services/post.service');

const getAllPost = async (req, res, next) => {
    try {
        const allPosts = await postService.getAllPost();
        res.status(200).json(allPosts);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPost,
};