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
- in middleweare make file authMiddleware.js and set a controller function
- then use the middleweare in server.js as import the middleweare and bind with middleweare array[]
- it will watch if the user islogged in or not
12. creating setlocals page in middleweare
- it will display from views page
- import in server.js and bind with middlewear
13. creting Dashboard and its route
- creating a route name dashboard.js in routes
14. creating dashboard controller in controller folder
- create a dashboardController.js in controller folder
15. making logout mecanism in navber
- in navbar set loggedin condition 
- make a logout controller and implement 
16. unauthenticate middleweare setup
- making a unauthenticate middlewear in middlewear folder
- set unauthenticate for set is not logged in will redirect