var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded(({ extended: true }));
var sha1 = require('sha1');
var querystring = require('querystring');
var coon = require('./routes/db');
var app=express();
app.use(urlencoded);
app.use(cors());
app.use('/img',express.static('public/img'))
app.get('/',function(req,res){
    let a = sha1('1234','kjdsfkjds');
    ['$','#',]
    res.send(a);
});

app.post('/cart',function(req,res){
  console.log(req)
  res.send('cartInfo');
});

app.get('/cart',function(req,res){
    res.send('cartInfo');
});
app.listen(8000,function(){
    console.clear();
    console.log(new Date().toLocaleDateString());
});