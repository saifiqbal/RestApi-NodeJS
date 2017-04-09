var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');


var index=require('./routes/index');
var intake=require('./routes/intake');

var port=5000;

var app=express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Static Folder
app.use(express.static(path.join(__dirname,'client')));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.header("Access-Control-Allow-Headers", "login, origin, X-Requested-With, content-type, accept, authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age", "1209600");
  next();
});


//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',index);
app.use('/api',intake);


app.listen(port,function(){

console.log('Server started on port :',port);

});