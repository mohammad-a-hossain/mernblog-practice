const User = require('../models/Users')
const bcrypt = require('bcrypt')

exports.signUpGetController =(req,res,next)=>{
    res.render('pages/auth/signUp',{title:'create accoutn'})

}
exports.signUpPostController =async(req,res,next)=>{
    //console.log(req.body)
    const {userName,email,password} = req.body 

   
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
       res.render('pages/auth/signUp',{title:'create accoutn'})
     }catch(e){
     console.log(e)
     next(e)
     }

    
   
}
exports.loginGetController = (req,res,next) =>{
    res.render('pages/auth/login',{title:'login  accoutn'})

}
exports.loginPostController = async (req,res,next) =>{
    let {email,password} = req.body 

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
      console.log('login success',user)
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