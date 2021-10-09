const BlogPost = require('./BlogPost.model');

exports.getAllBlogPosts = (req, res) => {

    BlogPost.find({})
        .then(posts => {
            res.status(200).json({
                status: res.statusCode,
                data: posts
            })
        })
        .catch(error => {
            console.log(error)
            res.status(400).json(error)
        })

}

exports.getBlogPostById = (req, res) => {

    const id = req.params.id;

    BlogPost.findById(id)
        .then(post => {
            res.status(200).json({
                status: res.statusCode,
                data: post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(400).json(error)
        })

}

exports.createBlogPost = (req, res) => {

    // testing data
    const now = new Date().getTime()
    const title = `Title create ${now}`;
    const body = `Body create ${now}`;
    const author = `Muhammad Badrun create ${now}`;

    // const { title, body author } = req.body;

    const newBlogPost = new BlogPost({
        title: title,
        body: body,
        author: author
    })

    newBlogPost.save()
        .then(post => {
            res.status(200).json({
                status: 200,
                message: 'Creat post successfully',
                data: post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(400).json(error)
        })

}

exports.updateBlogPost = (req, res) => {

    const id = req.params.id;

    // testing data
    const now = new Date().getTime()
    const title = `Title update ${now}`;
    const body = `Body update ${now}`;
    const author = `Muhammad Badrun update ${now}`;

    // const { title, body author } = req.body;

    BlogPost.findByIdAndUpdate(id, {
        title: title,
        body: body,
        author: author
    }, {new: true})
        .then(post => {
            res.status(200).json({
                status: 200,
                message: "Update post successfully",
                data: post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(400).json(error)
        })

}

exports.deleteBlogPost = (req, res) => {

    const id = req.params.id;

    BlogPost.findByIdAndRemove(id)
        .then(post => {
            res.status(200).json({
                status: 200,
                message: 'Delete post successfuly',
                data: post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(400).json(error)
        })

}