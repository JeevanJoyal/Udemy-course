const express = require("express");
const app = express();

app.get("/", function(req, res){
    console.log(typeof(req));
    res.send("Yoooooooooooooooooooooooooooooooooooooooooo");
});

app.get("/contact", function(req, res){
    res.send("<h3>Contact me @ jeevanjoyal77@gmail.com</h3>");
});

app.get("/about", function(req, res){
    res.send("Name : Kattevarapu Jeevan\n Age : 22\n Height : 6");
});

app.listen(3000, function(){
    console.log("Server started on part 3000");
});