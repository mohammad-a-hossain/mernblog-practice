

const router = require('express').Router()
const signupValidator = require('../validator/auth/signUpvalidator')
const loginValidator = require('../validator/auth/loginValidator')

const {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,


    logoutController

} = require('../controllers/authController')
const {unAuthenticated} = require('../middlewears/authmiddleweare')

router.get('/signUp',unAuthenticated,signUpGetController)
router.post('/signUp',unAuthenticated,signupValidator, signUpPostController)

router.get('/login',unAuthenticated,loginGetController)
router.post('/login',unAuthenticated,loginValidator,loginPostController)

router.get('/logout',logoutController)


module.exports = router