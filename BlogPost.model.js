const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogPostSchema = new schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    body: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    author: {
        type: String, // author will be created manually by the user, because here we do not determine the relationship
        required: true
    }
}, {
    timestamps: true // created_at and updated_at
})

module.exports = mongoose.model('BlogPost', blogPostSchema)