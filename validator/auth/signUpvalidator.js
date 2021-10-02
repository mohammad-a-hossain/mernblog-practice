const User = require('../../models/Users')
const {body} = require('express-validator')
 
 module.exports=[
    body('userName')
    .isLength({min:3,max:10}).withMessage('userName must be >3 and <10')
    .custom(async userName =>{
        let username = await User.findOne({userName})
        if(username){
            return Promise.reject('user name already exist')
        }
        return true
    }),
    body('email')
    .isEmail().withMessage('please provide a valid email')
    .custom(async email=>{
        let useremail = await User.findOne({email})
        if(useremail){
            return Promise.reject('email already used')
        }
        return true
    })
    .normalizeEmail(),
    body('password')
    .isLength({min:5}).withMessage('password must be have 5 chars'),

    body('confPassword')
    .isLength()
    .custom((confPassword,{req})=>{
        if(confPassword !== req.body.password){
            throw new Error('password did not mathed')
        }
        return true
    })
    
]
