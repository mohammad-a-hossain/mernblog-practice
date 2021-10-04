# blog mern project

# installation
1. express, morgan, mongoose , nodemon

#process

1. modeling
- model folder make a user model schema
- create model schema for user,post,comment,profile
2. routing
- login,logout,singup routes for tow each (get and post routes)
3. controller
- making all three controller 
4. instal yarn add ejs
5. pages folder and make login and signup pages using ejs 
- pages/auth/login.ejs and singup.ejs
6. setting middleware in app.js/server.js
7. bcrypt using for password encryption 
- yarn add bcrypt
- use in authController

8. use express validation //not done
- install (yarn add/install --save express-validator)//yarn add express-validator
- use express validator in database server side 
- use playground page for practising express validator
- use custorm validator in validator.js
9. signup validation and login validation 
- use separate validator for signup and login 
- show error msg in front end
- making validator folder and auth folder inside login and signup file for controller
10. Authentication as in middleware
- use session in server as a middleweare
- use session run code (yarn add express-session)
- go to app.js import session 
- set session as middleware and use in login.js
- set mongodb connect to atlas and locals with connect url
- install connect-mongodb-session for session storage
(npm/yarn i/add connect-mongodb-session) and set store in server.app

11. user session authorization
- to cheek if user is loggedin or not
- in middleweare make file authMiddleware.js 

12. creating dashboard page