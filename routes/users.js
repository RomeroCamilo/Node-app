//THIS FILE WILL CONTAINER OUR URL ROUTES WHICH WE WILL MOUNT IN OUR app.js

//starting up our express server app.
const express = require('express');
const router = express.Router();


//routing to our home page when the user requests this url route.
router.get('/',(request,response)=>{
    //rendering home.html
    response.render("home");
    response.end();
})

//exporting all our routes.
module.exports = router;