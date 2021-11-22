const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const routes = require('./routes/route')
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(routes)
mongoose.connect('mongodb://localhost/route',{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.Promise = global.Promise

app.get('/about',function(req,res){
    res.render('about',{title:'About'})
})
app.get('/create',function(req,res){
    res.render('create',{title:'Create'})
})
app.get('/contact',function(req,res){
    res.render('contact',{title:'Contact'})
})

// app.post('/delete',function(req,res)
// {
//     const id1 = req.body.checkbox
//     Blog.findByIdAndDelete(id1).then(function(result){
//         res.redirect('/blogs')
//     }).catch(function(err)
//     {
//         console.log(err)
//     })
// })
app.use(function(req,res)
{
    res.status(404).render('404',{title:'404_ERROR'})
})
app.listen(3000,function(){
    console.log('The server has started at port number 3000')
})
