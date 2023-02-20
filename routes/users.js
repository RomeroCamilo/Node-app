//THIS FILE WILL CONTAINER OUR URL ROUTES WHICH WE WILL MOUNT IN OUR app.js
//starting up our express server app.
const express = require('express');
const router = express.Router();

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

//Utilized to render html.
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());


//routing to our home page when the user requests this url route.
router.get('/',(request,response)=>{
    //rendering home.html
    //response.render('home');
    response.end('In progress... Come back later.');
})

//function that will lead us to the sign up page.
router.get('/signup',(request,response)=>{
    response.render('signup');
    response.end();
});

//exporting all our routes.
module.exports = router;