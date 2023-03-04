//THIS FILE WILL CONTAINER OUR URL ROUTES FOR POST REQUESTS.
//starting up our express server app.
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

//Utilized to parse form data.
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

//routing to our home page when the user requests this url route.
router.post('/', async (request,response)=>{
    //rendering home.html
    //response.render('home');
    response.end('In progress... Come back later.');
});

//function that will handle post request for signing up new user.
router.post('/added', async (request,response)=>{
    
  const user = request.body.user;
    const password = request.body.password;

    // create a query to check if the username already exists in the database
    const query = `SELECT COUNT(*) as count FROM users WHERE username = ?`;

    try {
      // get a connection from the pool/database
      const connection = await pool.getConnection();
  
      // execute the query with the provided username
      const [rows] = await connection.execute(query, [user]);
  
      // release the connection after getting our results.
      connection.release();
  
      // if the count is greater than 0, the username already exists
      if (rows[0].count > 0) {
        response.json(`Username ${user} already exists`);
      } 
      //the username is available so we signup.
      else 
      {
        console.log('User does not exist!');
        console.log(`Inserted user ${user} with password ${password}`);
        response.json(`${user} has succesfully signed up!`);
        await pool.query('INSERT into users (username, password) VALUES (?,?)',[user,password]);
      }
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Server Error' });
    }

    //const connection = await pool.getConnection();
    //const [rows, fields] = await connection.execute('SELECT * FROM users');
    //connection.release();
    //response.json(rows);
});

//function that will lead us to the sign up page.
router.post('/login',(request,response)=>{
  response.end("Successful");
});

//exporting our post router urls.
module.exports = router;