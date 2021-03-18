export default function handler(req, res):void{
    res.status(200).send("Okay")
    sendEmail(req.body)
}

var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_ADDR,
//     pass: process.env.EMAIL_PASS
//   }
// });

// var mailOptions = {
//   from: ,
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

function sendEmail(data:any):void{
    console.log(process.env.EMAIL_ADDR)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ADDR,
          pass: process.env.EMAIL_PASS
        }
      })
    // const mailOptions = {
    //     from: data.email,
    //     to: process.env.EMAIL_ADDR,
    //     subject: 'Quote Request',
    //     text: data.job
    // }

    transporter.sendMail({
        from: data.email,
        to: process.env.EMAIL_ADDR,
        subject: 'Quote Request',
        text: data.job
    },
    function (error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    })
    // transporter.sendMail(mailOptions, function(error, info){
        // if (error) {
        // console.log(error);
        // } else {
        // console.log('Email sent: ' + info.response);
        // }
    // });
}
