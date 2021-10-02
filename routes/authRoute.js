

const router = require('express').Router()
const signupValidator = require('../validator/auth/signUpvalidator')
const loginValidator = require('../validator/auth/loginValidator')

const {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,

    logoutGetController,
    logoutPostController

} = require('../controllers/authController')

router.get('/signUp',signUpGetController)
router.post('/signUp',signupValidator, signUpPostController)

router.get('/login',loginGetController)
router.post('/login',loginValidator,loginPostController)

router.get('/logout',logoutGetController)
router.post('/logout',logoutPostController)

module.exports = router