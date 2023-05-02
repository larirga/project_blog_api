const postService = require('../services/post.service');
const { decodeToken } = require('../utils/auth');

const getAllPost = async (req, res, next) => {
    try {
        const allPosts = await postService.getAllPost();
        return res.status(200).json(allPosts);
    } catch (error) {
        next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const decode = decodeToken(req.headers.authorization);
        const create = await postService.createPost(req.body, decode);
        return res.status(200).json(create);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPost,
    createPost,
};