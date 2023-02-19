//importing our functions and variables from other files in the app.
const data = require('./names')
const functions = require('./utils')

//loading our express library we installed. 
const express = require('express');
const app = express();

//functions.printData(data.user)

//creating our server.
const http = require('http');

const server = http.createServer((request,respond)=>{
    
    //based on the page link we request, we will respond.
    if(request.url === '/'){
        respond.end(`
        <body style="background-color:silver">
            <h1 style="color:red"> Home Page </h1>
            <a href="/about"><button>About Page</home></a>
        </body>
        `)
    }
    else if(request.url === '/about'){
        respond.end(`
        <body style="background-color:crimson">
            <h1>About me page</h1>
            <a href="/"><button>Home Page</home></a>
        </body>
        `)
    }
    else{
        respond.end(`
        <h1>This Link does not exist!</h1>
        <h2>Please go to a valid page</h2>
        <a href="/"><button>Home Page</home></a>
        <a href="/about"><button>About Page</home></a>
        `)
    }
})

console.log("Port 3000 successfully connected.")

server.listen(3000);