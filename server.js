const express=require('express');
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{
    var num1=req.body.num1;
    var two=eval(num1);
    res.send("the answer is " + two );

});

app.listen(3000,function()
{
    console.log("hey i am working ");
});