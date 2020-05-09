var nodemailer = require('nodemailer');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

require('dotenv').config();

console.log(process.env.FOO);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'developers.lab.me.prijave@gmail.com',
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from: 'developers.lab.me.prijave@gmail.com',
  to: 'stevancakic93@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  // html: "<p>Tekst</p>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});