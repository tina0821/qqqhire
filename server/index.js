var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded(({ extended: true }));
var sha1 = require('sha1');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var coon = require('./routes/db');
var app=express();
app.use(urlencoded);
app.use(cors());
app.use(cookieParser());
app.use('/img',express.static('public/img'))
app.get('/',function(req,res){
    let a = sha1('1234','kjdsfkjds');
    ['$','#',]
    res.send(a);
});

app.post('/cart',async (req,res)=>{
    let a = {...req.body}
    // let pp = `window.postMessage(${JSON.stringify(a)},'https://localhost:3000')`
    // console.log(pp)
    res.cookie('data', JSON.stringify(a))
    res.send(a);
    // res.send('<script>window.close();</script >');
});

app.get('/cart',function(req,res){
    coon.query(`SELECT * FROM cartmap INNER join product ON cartmap.productId=product.productId INNER JOIN imagemap ON cartmap.productId = imagemap.productId WHERE cartmap.account='kevin'`,[],(err,data)=>{
        let productAccount = []
        data.map(el=>{
            productAccount.push(el.productAccount)
        })
        productAccount = productAccount.filter((value,index,arr)=>{
            return arr.indexOf(value)===index
        })
        console.log(productAccount)
    })
    res.send('cartInfo');
});
app.listen(8000,function(){
    console.clear();
    console.log(new Date().toLocaleDateString());
});