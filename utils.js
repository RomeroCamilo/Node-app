//The purpose of this file is to store functions.

function printData(name){
    console.log("Hello World " + name);
}

function test(){
    console.log("Testing...")
}

//export is used to make data available throughout the entire application. exporting functions we created.
module.exports = {printData,test};