//set dotenv first
 require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('config')

//setting secret key using environment
/* we can use direct the variable
let DB_ADMIN= process.env.DB_ADMIN
let DB_PASSWORD= process.env.DB_PASSWORD 
*/

// const mongoDb_Uri=`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.95z2h.mongodb.net/mernblog`

const mongoDb_Uri=`mongodb+srv://${config.get('db-userName')}:${config.get('db-password')}@cluster0.95z2h.mongodb.net/mernblog`
const store = new MongoDBStore({
    uri: mongoDb_Uri,
    collection: 'blogsession',
    expires:1000*60*60*2
  });

// import route
const authRoutes= require('./routes/authRoute')
const dashboardRoute= require('./routes/dashboardRoute')

// import middleweare
const {bindUserWithRequest}=require('./middlewears/authmiddleweare')
const setLocals = require('./middlewears/setLocals')
const app = express()

//const config =require('./config/config')
if(app.get('env').toLowerCase()==='development'){
    console.log(config.dev.name)
}else{
    console.log(config.prod.name)
}

//set up view engeen
app.set('view engine','ejs')
app.set('views','views')

//set middleware array
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended:true}),
    express.json(),
    session({
        //secret:process.env.SECRET_KEY || 'SECRET_KEY',
        secret:config.get("secret"),
        resave:false,
        saveUninitialized:true,
        // cookie:{
        //     maxAge:60*60*60+1000
        // }
        store:store
    }),
    bindUserWithRequest(),
    setLocals()
]
//console.log(process.env.NODE_ENV)
app.use(middleware)
app.use('/auth',authRoutes)
app.use('/dashboard',dashboardRoute)
//app.use('/playground',validatorRoute)


app.get('/',(req,res)=>{
   
  
   //res.send("<h2>this is server side page for blogg</h2>")
   res.json({
       message:'hello  blog'
   })
})


const PORT = process.env.PORT | 9000


mongoose.connect(mongoDb_Uri,
{useNewUrlParser:true})
.then(()=>{
    console.log('databse connected')
app.listen(PORT,()=>{
console.log(`the mernblog app in running on port ${PORT}`)
})
})
.catch(err =>{
    console.log(err)
})


// mongoose.connect(mongoDbUri,{
//     useFindAndModify: false,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// app.listen(PORT,()=>{
//     console.log(`the server is listening on port ${PORT}`)
// })

//mongodb+srv://<abusen>:<abu123>@cluster0.vxjbg.mongodb.net/mernblog

