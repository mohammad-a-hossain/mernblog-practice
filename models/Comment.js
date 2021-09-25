

const {Scheme,model}= require('mongoose')
// const Post = require('./Posts')
// const User = require('./Users')

const commentScheme = new Schema({
       post:{
           type:Schema.Types.ObjectId,
            ref:'Post',
            require:true   
           },
       user:{
           type:Schema.Types.ObjectId,
           ref:'User',
           require:true
       },
       body:{
           type:String,
           trim:true,
           require:true
       },
       replies:[
           {
               body:{
                type:String,
                require:true
               },
               user:{
                type:Schema.Types.ObjectId,
                ref:'User',
                require:true
               },
               creatAt:{
                type:Date,
                default:new Date()
               }
           }
       ]
},{timestamps:true})

const Comment = new model('Comment',commentScheme)
module.exports = Comment

