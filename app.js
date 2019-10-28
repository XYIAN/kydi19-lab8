const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js

app.use(express.json());

//routes
app.get("/", function(req, res){//can also be .use 
    
    res.render("index");
    
} );







//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})