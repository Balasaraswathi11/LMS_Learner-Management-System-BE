import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const sendMail = async (email, subject = 'Your OTP Code', data) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD
    }
  });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #4CAF50;
          text-align: center;
        }
        .otp {
          font-size: 24px;
          font-weight: bold;
          color: #FF5722;
          text-align: center;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Your OTP Code</h1>
        <p>Dear ${data.name},</p>
        <p>Your OTP code is:</p>
        <p class="otp">${data.otp}</p>
        <p>This code is valid for a short period. Please use it promptly.</p>
        <div class="footer">
          <p>Thank you for using our service!</p>
          <p>If you did not request this code, please ignore this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: email,
    subject,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully');
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('Email sending failed');
  }
};

export default sendMail;

export const sendForgotMail = async (subject, data) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD
    }
  });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f3f3f3;
          margin: 0;
          padding: 0;
        }
        .container {
          background-color: #ffffff;
          padding: 20px;
          margin: 20px auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 600px;
        }
        h1 {
          color: #5a2d82;
        }
        p {
          color: #666666;
        }
        .button {
          display: inline-block;
          padding: 15px 25px;
          margin: 20px 0;
          background-color: #5a2d82;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-size: 16px;
        }
        .footer {
          margin-top: 20px;
          color: #999999;
          text-align: center;
        }
        .footer a {
          color: #5a2d82;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Reset Your Password</h1>
        <p>Hello,</p>
        <p>You have requested to reset your password. Please click the button below to reset your password.</p>
        <a href="${process.env.frontendurl}/reset-password/${data.token}" class="button">Reset Password</a>
        <p>If you did not request this, please ignore this email.</p>
        <div class="footer">
          <p>Thank you,<br>Your Website Team</p>
          
        </div>
      </div>
    </body>
    </html> 
  `;

  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: data.email,
    subject,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Forgot password email sent successfully');
  } catch (error) {
    console.error('Error sending forgot password email:', error);
    throw new Error('Email sending failed');
  }
};