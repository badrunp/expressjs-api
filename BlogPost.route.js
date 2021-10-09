const express = require('express');
const { getAllBlogPosts, createBlogPost, getBlogPostById, deleteBlogPost, updateBlogPost } = require('./BlogPost.controller');

const route = express.Router();

route.get('/posts', getAllBlogPosts)
route.get('/post/:id', getBlogPostById)
route.post('/post', createBlogPost)
route.put('/post/:id', updateBlogPost)
route.delete('/post/:id', deleteBlogPost)
    

module.exports = route;