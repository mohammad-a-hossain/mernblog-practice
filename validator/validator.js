const router = require('express').Router()

const {check } = require('express-validator');
const {validationResult} = require('express-validator');

router.get('/validator',(req,res,next)=>{
    res.render('playground/signup.ejs',{title:'singnup validation'})

})

router.post('/validator',

[
    check('userName')
    .trim()
    .isEmpty()
    .not()
    .isLength({max:10})
    .withMessage(`user name must not greater than 10 char`),
    check('email')
    .isEmail()
    .withMessage(`email can not blank or error format`)
    .normalizeEmail(),

    check('password').custom(value =>{
        if(value.length < 5){
            throw new Error('password must be greater then 5 char')
        }
        return true
    }),
    check('confPassword').custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error('password did not match')
        }
        return true
    })

],(req,res,next)=>{
    const errors =validationResult(req)
    const formatter =(error)=>error.msg
     console.log(errors)
     console.log(errors.isEmpty())
     console.log(errors.array())
     console.log(errors.mapped())
     console.log(errors.formatWith(formatter).mapped())
     console.log(req.body.email, req.body.userName)
     res.render('playground/signup.ejs',{title:'singnup validation'})
})
module.exports = router
