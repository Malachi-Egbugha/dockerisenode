const express = require("express");

 
app = express();
 
 

 
 
 
 //simple routes
 app.get("/", function (req, res){
    res.send('hello world')
} )

 //set port, listen for request
 const PORT = process.env.PORT || 8080;
 app.listen(PORT, () =>{
     console.log(`SERVER is running on port ${PORT}`)
 })