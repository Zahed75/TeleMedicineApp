const nodemailer = require('nodemailer');
const User=require('../modules/User/model');
//emails

const createToken = require('./createToken');
const { DOCTOR,PATIENTS,ADMIN,SUPER_ADMIN } = require('../config/constant');


// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'tanimlondon@gmail.com', // Replace with your Gmail email
    pass: 'yjtmebogomuxyhbg', // Replace with your Gmail password or app password
  },
  tls: {
    rejectUnauthorized: false // Ignore SSL certificate verification
  }
});

// Function to send email containing OTP
const sendEmailUtility = async (email, otp) => {
  // Email content
  const mailOptions = {
    from: 'TeleApp <Taninlondon@gmail.com>', // Replace with your name and Gmail email
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP for verification is: ${otp}`,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email. Please try again later.');
  }
};

module.exports = sendEmailUtility;