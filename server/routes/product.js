var express = require('express');
var router = express.Router();
var conn = require('./db');

//product
router.get('/api/products', (req, res) => {
    const query = `
      SELECT p.*, (
          SELECT im.imageSrc
          FROM imagemap AS im
          WHERE im.productId = p.productId
          LIMIT 1
      ) AS imageSrc,
      pcm.productCategoryID
      FROM product AS p
      JOIN productcategorymap AS pcm ON pcm.productCategoryChild = p.productCategoryChild
      ORDER BY RAND();
  `;
    conn.query(query, (error, results) => {
        if (error) { console.log(error, '資料庫查詢失敗') }
        res.json(results);
    });
});

router.get('/api/productItem/:id', (req, res) => {
    const Pid = req.params.id;
    const query = `
      SELECT p.*,im.imageSrc
      FROM product p
      JOIN imagemap im ON p.productId = im.productId
      WHERE p.productId = ?;
  `;
    conn.query(query, [Pid], (err, data) => {
        err ? '查詢失敗' : res.json(data)
    });
})

router.get('/api/products/:productCategoryChild', (req, res) => {
    const child = req.params.productCategoryChild;
    const query = `
        SELECT p.*, (
            SELECT im.imageSrc
            FROM imagemap AS im
            WHERE im.productId = p.productId
            LIMIT 1
        ) AS imageSrc
        FROM product AS p
        WHERE p.productCategoryChild IN (
            SELECT pcm.productCategoryChild
            FROM productcategorymap AS pcm
            WHERE pcm.productCategoryId = (
            SELECT productCategoryId
            FROM productcategorymap
            WHERE productCategoryChild = ?
            )
        )
        ORDER BY RAND();
      
    `
    conn.query(query, [child], (err, data) => {
        err ? console.log('查詢失敗') : res.json(data)
    })
})


router.get('/api/productseller/:id', (req, res) => {
    const id = req.params.id
    const sql = `
    SELECT u.profilePictureSrc, u.account ,u.nickname
    FROM product p
    INNER JOIN userinfo u ON p.productAccount = u.account
    WHERE p.productId = ?;
    `

    conn.query(sql, [id], (err, data) => {
        err ? console.log('查詢失敗') : res.json(data)
    })
})

router.get('/api/Pseller/:account', (req, res) => {
    const account = req.params.account
    const sql = `
        SELECT u.account, u.nickname, u.email, u.profilePictureSrc, u.phoneNumber, p.*,
        (SELECT im.imageSrc
        FROM imagemap im
        WHERE im.productId = p.productId
        LIMIT 1) AS imageSrc
        FROM userinfo u
        INNER JOIN product p ON p.productAccount = u.account
        WHERE u.account = ?

    `
    conn.query(sql, [account], (err, data) => {
        err ? console.log('查詢失敗') : res.json(data)
    })
})

module.exports = router