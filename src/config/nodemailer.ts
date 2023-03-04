// @ts-ignore
import {nodemailer} from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

console.log(email,pass);
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass:pass,
  },
});

export const mailOptions = { 
  to: email,
};
