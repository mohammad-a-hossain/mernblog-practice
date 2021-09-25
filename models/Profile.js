

const {Schema,model} = require('mongoose')

// const User = require('./Users')
// const Post = require('./Posts')

const profileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    user:{
        type:String,
        ref:'User',
        require:true
    },
    title:{
        type:String,
        require:true,
        maxLength:100
    },
    bio:{
        type:String,
        trim:true,
        maxLength:500
    },
    profilePics:String,
    links:{
        website:String,
        facebook:String,
        github:String,
        twitter:String
    },
    posts:[
        {
            type:Schema.Types.ObjectId,
            ref:'Post'
        }
    ],
    bookmark:[
        {
            type:Schema.Types.ObjectId,
            ref:'Post'
        }
    ]

},{timestamps:true})

const Profile = new model('Profile',profileSchema)

module.exports = Profile