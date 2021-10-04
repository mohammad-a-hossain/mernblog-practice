const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);

const mongoDb_Uri='mongodb+srv://abusen:abusen123@cluster0.95z2h.mongodb.net/mernblog'
const store = new MongoDBStore({
    uri: mongoDb_Uri,
    collection: 'blogsession',
    expires:1000*60*60*2
  });

// import route
const authRoutes= require('./routes/authRoute')
const app = express()

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
        secret:process.env.SECRET_KEY || 'SECRET_KEY',
        resave:false,
        saveUninitialized:true,
        // cookie:{
        //     maxAge:60*60*60+1000
        // }
        store:store
    })
]
app.use(middleware)
app.use('/auth',authRoutes)
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

