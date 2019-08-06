
var http = require('http');
var express = require('express');
var app = express();
var server= http.Server(app);
var bodyParser=require ('body-parser');
var mongo = require('mongodb');



var db_url = "mongodb+srv://Ahnaf93:TAhmid93@cluster0-kb1r0.mongodb.net/test?retryWrites=true&w=majority"



var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

 app.get('/',function(req,res){
     res.sendFile(__dirname+'/view/form.html')
 })
app.get('/article',function(req,res){
       res.sendFile(__dirname+'/view/posts.html')
 })

require('./routes/posts-routes')(app);
server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
  console.log('Server running');
});