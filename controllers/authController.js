const User = require('../models/Users')
const {validationResult} = require('express-validator')


const bcrypt = require('bcrypt')
const errorFormatter= require('../utilities/validationErrorFormatter')





exports.signUpGetController =(req,res,next)=>{
    res.render('pages/auth/signUp',{title:'create accoutn',error:{}})

}

exports.signUpPostController =async(req,res,next)=>{
    //console.log(req.body)
      let {userName,email,password} = req.body 
    let errors =validationResult(req).formatWith(errorFormatter)
     if(!errors.isEmpty()){
         //return console.log(errors.mapped())
         return res.render('pages/auth/signUp',
         {title:'create accoutn',error:errors.mapped()})
     }
   
     try{
         //using bcrypt
         let hassedPassword = await bcrypt.hash(password,11)
         let user = new User({
                  userName,
                     email,
                 password:hassedPassword
             })


       let createUser = await user.save()
       console.log('user create success',createUser) 
       res.render('pages/auth/signUp',{title:'create accoutn',error:{}})
     }catch(e){
     console.log(e)
     next(e)
     }

    
   
}
exports.loginGetController = (req,res,next) =>{
    console.log(req.session.isLoggedIn, req.session.user)
    res.render('pages/auth/login',{title:'login  accoutn'})

}
exports.loginPostController = async (req,res,next) =>{
    let {email,password} = req.body 

  
    let errors =validationResult(req).formatWith(errorFormatter)
     if(!errors.isEmpty()){
         //return console.log(errors.mapped())

         return res.render('pages/auth/login',
         {title:'login account',error:errors.mapped()})
     }

    

     try{
     let user = await User.findOne({email})
     if(!user){
         return res.json({
             message:"invalid credintials"
         })
     }

     let match = await bcrypt.compare(password,user.password)
     if(!match){
        return res.json({
            message:"invalid credintials pass"
        })
     }
     
     // console.log('login success',user)
     //setting session
     req.session.isLoggedIn=true
     req.session.user =user
    res.render('pages/auth/login',{title:'login  accoutn'})

     }catch(e){
         console.log(e)
         next(e)
     }
      
}
exports.logoutGetController =(req,res,next) =>{

}
exports.logoutPostController =(req,res,next) =>{

}