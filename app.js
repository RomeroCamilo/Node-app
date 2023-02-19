//loading our express library we installed. 
const express = require('express');
//creating app with express server.
const app = express();

const path = require('path');

//loading ejs library to render html
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
app.post('/added',(request,response)=>{
    //Getting {user} value from form from signup.ejs 
    const {user} = request.body;
    const{password} = request.body;
    response.end(`
    <h1>Your Login Info</h1>
    ${user}
    ${password}
    `);
})

//linking our url routes from users.js
const userRouter = require('./routes/users');

//mounting our router starting with '/home' to all our url routes in users.js
app.use('/home',userRouter);

//listening to requests on port 3000.
app.listen(3000);

console.log("Successfully connected to port 3000!")


