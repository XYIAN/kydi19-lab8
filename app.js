const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js
/* global $ */
app.use(express.json());

//routes
app.get("/", function(req, res){//can also be .use 
let score = 0; 
    let f1, f2, f3, f4, f5; 
    f1=f2=f3=f4=f5="wrong"; 
    let rando = Math.floor(Math.random() * 3);
    let array = ["Rhode Island", "Maryland", "Maine", "New York"];
    let questionArray = array[rando]; 
    //console.log(req.query.q1); 
    
    res.render("index", { //passes scores into the view 
        "score": score,
        "query": req.query, 
        "f1":f1,
        "f2":f2,
        "f3":f3,
        "f4":f4,
        "f5":f5, 
        "questionArray" : questionArray
    });
    
});
 app.get("/gradeQuiz", function(req, res){
     let score = 0; 
    let f1, f2, f3, f4, f5; 
    f1=f2=f3=f4=f5="wrong"; 
     if(req.query.q1 == "sacramento")
    {
        score +=  12.5; 
        f1 = "You got it!"; 
        // rightAnswer2(1); 
    }
    if(req.query.q2 == "mo")
    {
        score += 12.5 ; 
        f2 = "You got it!"; 
        
    }
    if(req.query.q3 == 0)
    {
        score += 12.5 ; 
        f3 = "You got it!";
        
    }
    if(req.query.q4 == 0)
    {
        score += 12.5 ; 
        f4 = "You got it!";
        
    }
     if(req.query.q5 == 0)
    {
        score += 12.5 ; 
        f5 = "You got it!";
        
    }
    if(req.query.q6 == 0)
    {
        score += 12.5 ; 
        f5 = "You got it!";
        
    }
    if(req.query.q7 == 0)
    {
        score += 12.5 ; 
        f5 = "You got it!";
        
    }
    if(req.query.q8 == 0)
    {
        score += 12.5 ; 
        f5 = "You got it!";
        
    }
    res.send({"score":score ,"f1":f1 , "f2":f2, "f3":f3, "f4":f4, "f5":f5}); 
    

 });






//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})