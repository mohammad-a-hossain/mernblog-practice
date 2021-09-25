const {Schema,model} = require('mongoose')

// const Profile = require('./Profile')

const userSchema = new Schema({
    userName:{
        type:String,
        require:true,
        trim:true,
        minLength:4
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    profile:{
        type:Schema.Types.ObjectId,
        ref:'Profile'
    },


},{
    timestamps:true
})

const User = model('User',userSchema)
module.exports = User