//loading our express library we installed. 
const express = require('express');
//creating app with express server.
const app = express();

//connecting to mysql.
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Champion2118!',
  database        : 'login'
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      //return;
    }
    else{
        console.log("Successfully connected to mySQL.");
    }
});

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
//mounting our router starting with '/post' to all our url routes in users.js
app.use('/post',userRouterPosts);

//listening to requests on port 3000.
app.listen(3000);

console.log("Successfully connected to port 3000!");