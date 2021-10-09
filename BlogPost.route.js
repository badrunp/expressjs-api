const express = require('express');
const { getAllBlogPosts, createBlogPost, getBlogPostById, deleteBlogPost, updateBlogPost } = require('./BlogPost.controller');

const route = express.Router();

route
    .get('/posts', getAllBlogPosts)
    .post('/post', createBlogPost)
    .put('/post/:id', updateBlogPost)
    .delete('/post/:id', deleteBlogPost)
    
route.get('/post/:id', getBlogPostById)

module.exports = route;