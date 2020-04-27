const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("*",function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/submit",function(req,res){
    let data= req.body;
    console.log(data);
    res.send("Thank You!");
});

app.listen(2000, function(err){
    if (err)
    console.log(err);
    console.log("Server started on Port 2000");
});