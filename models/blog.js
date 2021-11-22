const mongoose = require('mongoose')
const Schema = mongoose.Schema
const blogSchema = new Schema({
    name:String,
    age:Number,
    sex:String
},{timestamps:true})

const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog