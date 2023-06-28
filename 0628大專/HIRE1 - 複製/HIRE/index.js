var express = require('express');
var app = express();

app.use('/public',express.static('public'));

app.get('/',function(req,res){
  res.render('home.ejs');
})



app.get('/', function(req, res) {
  res.send('ERROR404');
});

app.listen(3000, function() {
  console.log('成功執行  執行中.... => ' + new Date().toLocaleTimeString());
});