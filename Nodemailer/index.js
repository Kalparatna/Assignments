require('dotenv').config(); 
const nodemailer = require('nodemailer'); 

const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: 'recipientmailid', 
    subject: "Nodemailer testing", 
    text: "Welcome to NodeMailer, It's Working", 
    html: '<h1>Welcome</h1><p>That was easy!</p>' 
};

// Transporter setup using Gmail service
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    }
});

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error("Error while sending email:", error);
    } else {
        console.log('Email sent successfully:', info.response); 
    }
});
