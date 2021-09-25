const router = require('express').Router()

const {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,

    logoutGetController,
    logoutPostController

} = require('../controllers/authController')

router.get('/signUp',signUpGetController)
router.post('/signUp',signUpPostController)

router.get('/login',loginGetController)
router.post('/login',loginPostController)

router.get('/logout',logoutGetController)
router.post('/logout',logoutPostController)

module.exports = router