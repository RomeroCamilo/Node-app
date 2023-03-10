//loading our express library we installed. 
const express = require('express');
//creating app with express server.
const app = express();

const path = require('path');

//loading ejs library to render html when requested specific url routes.
app.set('view engine','ejs');

//linking our static assets (stylesheets, images, scripts, etc from the public folder.)
app.use(express.static(path.join(__dirname,'public')));

//parse form data.
app.use(express.urlencoded({extended:false}));

//function when the user is at the login page.
app.get('/',(request,response) =>{
    response.render("index");
    response.end();
    }
);

//linking our url routes from users.js
const userRouter = require('./routes/users');
//linking our url routes from posts.js
const userRouterPosts = require('./routes/posts');

//mounting our router starting with '/home' to all our url routes in users.js
app.use('/home',userRouter);
//mounting our router starting with '/post' to all our url routes in posts.js
app.use('/post',userRouterPosts);

//listening to requests on port 3000.
app.listen(2000);

console.log("Successfully connected to port 2000!");