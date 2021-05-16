import nodemailer from 'nodemailer';
const mailData = {
  from: process.env.EMAIL_ACCOUNT,
  to: 'daniel548604106@gmail.com',
  subject: 'Message from daniel',
  text: 'testing',
  html: `<div>Test 1</div>`,
};

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

export const sendPasswordReset = async () => {
  console.log('sending');
  try {
    await transporter.sendMail(mailData);
    console.log('sent');
  } catch (error) {
    console.log(error);
  }
};
