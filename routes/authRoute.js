

const router = require('express').Router()
const User =require('../models/Users')
//const validatorRoute= require('../validator/validator.js')
const {body}  = require('express-validator')



const {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,

    logoutGetController,
    logoutPostController

} = require('../controllers/authController')

//validation route
const signupValidaton =
[
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

router.get('/signUp',signUpGetController)
router.post('/signUp',signupValidaton, signUpPostController)

router.get('/login',loginGetController)
router.post('/login',loginPostController)

router.get('/logout',logoutGetController)
router.post('/logout',logoutPostController)

module.exports = router