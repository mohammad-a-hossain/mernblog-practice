

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
        let user = await User.findOne({userName})
        if(user){
            return Promise.reject('user name already exist')
        }
    }),
    body('email')
    .isEmail().withMessage('please provide a valid msg')
    .custom(async email=>{
        let email =await User.findOne({email})
        if(email){
            return Promise.reject('email already used')
        }
    }),
    body('password')
    .isEmail({min:5}).withMessage('password must be have 5 chars'),
    body('confPassword')
    .custom(confPassword, ({req})=>{
        if(confPassword !== req.body.password){
            throw new Error('password did not mathed')
        }
    })
    
]

router.get('/signUp',signUpGetController)
router.post('/signUp',signupValidaton, signUpPostController)

router.get('/login',loginGetController)
router.post('/login',loginPostController)

router.get('/logout',logoutGetController)
router.post('/logout',logoutPostController)

module.exports = router