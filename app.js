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

//getting our user data.
let {users} = require('./data.js');

//parse form data.
app.use(express.urlencoded({extended:false}));

//function when the user is at the login page.
app.get('/',(request,response) =>{
    response.render("index");
    response.end();
}
);

//function that will lead us to the sign up page.
app.get('/signup',(request,response)=>{
    response.render('signup');
    response.end();
});


//function that will handle post request for signing up new user.
app.post('/added', async (request,response)=>{

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

//linking our url routes from users.js
const userRouter = require('./routes/users');

//mounting our router starting with '/home' to all our url routes in users.js
app.use('/home',userRouter);

//listening to requests on port 3000.
app.listen(3000);

console.log("Successfully connected to port 3000!")


