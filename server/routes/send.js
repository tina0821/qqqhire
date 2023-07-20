var express = require('express');
var router = express.Router();

// Multer 中介
const multer = require('multer');

// img storage path(儲存)
// const imgconfig = multer.diskStorage({
//    destination:(req,file,callback) => {
//       callback(null,"./public/testimg")
//    },
//    filename:(req,file,callback) => {
//       callback(null,`image-${Date.now()}.${file.originalname}`)
//    }
// })

// img filter(篩選)
const isImage = (req, file, cb) => {
   if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error('Please upload an image'))
   }
   cb(null, true)
}


const upload = multer({
   // storage:imgconfig,
   fileFilter:isImage,
   dest: 'uploads/',
   limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB 的上傳限制
   }
});








// 寄送信件
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

   service: "gmail",
   auth: {
      user: "hireoutdoor2023@gmail.com",
      pass: "kvyceagpbrdesstl"
   }
});


router.post('/send', upload.single('photo'), (req, res) => {
   console.log(req.file)
   
   const mailOptions = {
      from: "hireoutdoor2023@gmail.com",
      to: "hireoutdoor2023@gmail.com",
      subject: "Nodemailer Test",
      html: `

   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        
      @import url(https://fonts.googleapis.com/css?family=Lato:100,300,400);
    
      body {
         font-family: 'Lato', sans-serif;
         background: #e2dedb;
         color: #b3aca7;
      }

      header {
         position: relative;
         margin: 100px 0 25px 0;
         font-size: 2.3em;
         text-align: center;
         letter-spacing: 7px;
      }

      #form {
         position: relative;
         width: 500px;
         margin: 50px auto 100px auto;
      }

      input {
         font-family: 'Lato', sans-serif;
         font-size: 0.875em;
         width: 470px;
         height: 50px;
         padding: 0px 15px 0px 15px;

         background: transparent;
         outline: none;
         color: #726659;

         border: solid 1px #b3aca7;
         border-bottom: none;
      }
  
      textarea {
         width: 470px;
         max-width: 470px;
         height: 110px;
         max-height: 110px;
         padding: 15px;

         background: transparent;
         outline: none;

         color: #726659;
         font-family: 'Lato', sans-serif;
         font-size: 0.875em;

         border: solid 1px #b3aca7;
      }

      #img{
         width: 470px;
         height: 470px;
      }

    </style>
   </head>

   <body>
    <header>PROBLEM REPORT</header>
    <form id="form" class="topBefore">
        <input id="name" type="text" placeholder="NAME" value="John DoeXXX" readonly>
        <input id="email" type="text" placeholder="E-MAIL" value="johndoeXXX@example.com" readonly>
        <textarea id="message" type="text" placeholder="MESSAGE" readonly>${req.body.text}</textarea>
    </form>
   </body>
   </html>

   `,
      attachments: [
         {
            filename: '問題回報照片', // 附件檔案名稱
            path: req.file.path,     // 照片的檔案路徑
         },
      ],
   };

   transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
         console.log(error);
         res.send(error);
      } else {
         console.log("Email sent: " + info.response + '成功發送');
         res.json(info);
      }
   });
})


module.exports = router;