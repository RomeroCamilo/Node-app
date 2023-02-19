//loading our express library we installed. 
const express = require('express');
//creating app with express server.
const app = express();

const path = require('path');

//loading ejs library to render html
app.set('view engine','ejs');

//linking our static assets (stylesheets, images, scripts, etc from the public folder.)
app.use(express.static(path.join(__dirname,'public')));

console.log("Successfully connected to port 3000!")

//function when the user requests this url page.
app.get('/',(request,response) =>{
    response.render("index");
    response.end();
}
);

//listening to requests on port 3000.
app.listen(3000);


