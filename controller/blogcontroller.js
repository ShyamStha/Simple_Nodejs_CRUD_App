const Blog = require('../models/blog')
const get_index = function(req,res){
    res.redirect('/blogs')
}

const get_blogs = function(req,res){
    Blog.find().sort({createdAt:-1}).then(function(result)
    {
        res.render('home',{flag:result,title:'BlogsPost'})
    }).catch(function(err)
    {
        console.log(err)
    })
}

const post_blogs = function(req,res){
    const blog = new Blog(req.body)
    blog.save().then(function(result){
        res.redirect("/")
    }).catch(function(err){
        console.log(err)
    })
}

const get_update = function(req,res){
    const id = req.params.id
    Blog.findById(id).then(function(result){
        res.render('details',{blog:result,title:'Details'})
    }).catch(function(err){
        console.log(err)
    })
}
const post_delete = function(req,res){
    const id = req.body.checkbox
    Blog.findByIdAndRemove(id).then(function(result){
        res.redirect('/')
    }).catch(function(err)
    {
        console.log(err)
    })
}

module.exports = {
    get_index,
    get_blogs,
    post_blogs,
    get_update,
    post_delete
}