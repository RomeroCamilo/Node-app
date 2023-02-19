//importing our functions and variables from other files in the app.
const data = require('./extra/names')
const functions = require('./extra/utils')

//loading our express library we installed. 
const express = require('express');
//creating app with express server.
const app = express();

console.log("Successfully connected to port 3000!")

//function when the user requests this url page.
app.get('/',(request,response) =>{
    response.send(`<h1>Testing</h1>`);
    response.end();
}
);

//listening to requests on port 3000.
app.listen(3000);


