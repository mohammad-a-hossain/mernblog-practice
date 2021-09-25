const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')



//  const mongoDbUri = 'mongodb://127.0.0.1:27017/mernblog'


// mongoose.set('useCreateIndex', true)// using for search index
// mongoose.set('useFindAndModify', false);

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
    express.json()
]
app.use(middleware)
app.use('/auth',authRoutes)
app.get('/',(req,res)=>{
   
  
   //res.send("<h2>this is server side page for blogg</h2>")
   res.json({
       message:'hello  blog'
   })
})


const PORT = process.env.PORT | 9000


mongoose.connect('mongodb://127.0.0.1:27017/test',
{useNewUrlParser:true})
.then(()=>{
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

