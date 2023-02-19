//loading our express library we installed. 
const express = require('express');
//creating app with express server.
const app = express();

const path = require('path');

//loading ejs library to render html
app.set('view engine','ejs');

//linking our static assets (stylesheets, images, scripts, etc from the public folder.)
app.use(express.static(path.join(__dirname,'public')));

//function when the user is at the login page.
app.get('/',(request,response) =>{
    response.render("index");
    response.end();
}
);

//function when the user is at the home page.
app.get('/home',(request,response)=>{
    response.render("home");
    response.end();
})

//listening to requests on port 3000.
app.listen(3000);

console.log("Successfully connected to port 3000!")


