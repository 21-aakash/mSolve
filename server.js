const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// import {webHead, webContent, webImage} from 

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"));

app.set('view engine', 'ejs')

app.get("/", function(req, res){
    res.render("home");
});

app.get("/hiringPage.ejs", function(req,res){
    res.render("hiringPage");
})

app.get("/internship.ejs", function(req, res){
    res.render("internship");
})

app.listen(3000, function(){
    console.log("server is posted on port 3000")
})