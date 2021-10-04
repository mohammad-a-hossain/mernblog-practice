

const router = require('express').Router()
const  { isAuthenticated}=require('../middlewears/authmiddleweare');
const {dashboardGetController}= require('../controllers/dashboardController')


router.get('/',isAuthenticated,dashboardGetController)
module.exports =router