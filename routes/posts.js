//THIS FILE WILL CONTAINER OUR URL ROUTES FOR POST REQUESTS.
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
router.post('/', async (request,response)=>{
    //rendering home.html
    //response.render('home');
    response.end('In progress... Come back later.');
})

//function that will handle post request for signing up new user.
router.post('/added', async (request,response)=>{

    const user = request.body.user;
    const password = request.body.password;

    //const connection = await pool.getConnection();
    //const [rows, fields] = await connection.execute('SELECT * FROM users');
    //connection.release();
    //response.json(rows);

    await pool.query('INSERT into users (username, password) VALUES (?,?)',[user,password]
    );
    
    console.log(`Inserted user ${user} with email ${password}`);
    response.end(`Succesfully signed up!`);
})


//exporting our post router.
module.exports = router;