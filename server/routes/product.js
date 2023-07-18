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


//產品頁面跳轉
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


//分類推薦
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

//賣家頁面
router.get('/api/productseller/:id', (req, res) => {
    const id = req.params.id
    const sql = `
    SELECT u.profilePictureSrc, u.account ,u.nickname, u.email
    FROM product p
    INNER JOIN userinfo u ON p.productAccount = u.account
    WHERE p.productId = ?;
    `

    conn.query(sql, [id], (err, data) => {
        err ? console.log('查詢失敗') : res.json(data)
    })
})


//賣家商品
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


//加入收藏
router.post('/api/collect', (req, res) => {
    const { account, productId } = req.body
    const sql = 'SELECT * FROM favorites WHERE account = ? AND productId = ?';
    const insertsql = `INSERT INTO favorites(account, productId) VALUES (?,?)`
    conn.query(sql, [account, productId], (err, result) => {
        if (err) { console.log('查詢失敗') }
        if (result.length > 0) {
            return res.status(400).json({ error: '該項目已經被收藏過了' });
        } else {
            conn.query(insertsql, [account, productId], (err, data) => {
                err ? console.log('插入失敗') : res.status(200).json(data)
            })
        }
    })
})

//加入租物車
router.post('/api/insertCart', (req, res) => {
    const { account, productId, rentStart, rentEnd } = req.body
    const sql = 'SELECT * FROM cartmap WHERE account = ? AND productId = ?';
    const insertsql = `INSERT INTO cartmap(account, productId, rentStart, rentEnd) VALUES (?,?,?,?)`
    conn.query(sql, [account, productId], (err, result) => {
        if (err) { console.log('查詢失敗') }
        if (result.length > 0) {
            return res.status(400).json({ error: '該項目已在租物車中' });
        } else {
            conn.query(insertsql, [account, productId, rentStart, rentEnd], (err, data) => {
                err ? console.log('插入失敗') : res.status(200).json(data)
            })
        }
    })
})


module.exports = router