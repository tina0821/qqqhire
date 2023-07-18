// require('@babel/register');

const nodemailer = require("nodemailer");
// const { renderToString } = require("react-dom/server");
// const Returnqu = require("../client/src/components/returnqu/returnqu");


const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "hireoutdoor2023@gmail.com",
      pass: "kvyceagpbrdesstl"
   }
});


// const reactElement = <Returnqu />;
// const reactHtml = renderToString(reactElement);


const mailOptions = {
   from: "hireoutdoor2023@gmail.com",
   to: "hireoutdoor2023@gmail.com",
   subject: "Nodemailer Test",
   html: ""
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response + '成功發送');
   }
});
