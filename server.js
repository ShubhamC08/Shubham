var express = require('express');
var app = express();
var mongoose=require('mongoose');
var morgan=require('morgan');
var bodyparser=require('body-parser');
var router = express.Router();//router object is created for routes/api.js folder to access data through router object
var appRoutes=require('./app/routes/api')(router);//using router object
var path=require('path');

app.use(morgan('dev'));
app.use(bodyparser.json());//for parsing application/json
app.use(bodyparser.urlencoded({extended:true}));//	for parsing application/x-www-form0-urlencoded
app.use(express.static(__dirname+'/public'));
app.use('/api',appRoutes);

mongoose.connect('mongodb://localhost/newsapidb',function(err){
	if(err){
		console.log("not connected");
	}
	else{
		console.log("connected");
	}
});

app.get("*",function(req,res){
	res.sendFile(path.join(__dirname+"/public/app/views/index.html"));//main layout for every thing index.html
});

app.listen(3000);