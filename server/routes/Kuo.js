var coon = require('./db');
var express = require('express');
var router = express.Router();

router.get('/api/homeimg',(req,res)=>{
    const SQL = `
    SELECT productId, MIN(imageSrc) AS imageSrc
    FROM imagemap
    GROUP BY productId
    ORDER BY RAND();
    `
    coon.query(SQL,(Err,data)=>{
        Err?console.log('NO'):res.json(data)
    })
})



module.exports = router