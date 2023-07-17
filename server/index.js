var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded(({ extended: true }));
var sha1 = require('sha1');
var querystring = require('querystring');
var coon = require('./routes/db');
var app=express();
app.use(cors())
app.use(urlencoded);
app.use('/img',express.static('public/img'))



const kuo = require('./routes/Kuo')
app.use('/',kuo)

app.listen(8000,function(){
    console.clear();
    console.log(new Date().toLocaleDateString());
});