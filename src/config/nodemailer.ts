// @ts-ignore
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
import nodemailer from "nodemailer";

console.log(email,pass);  
export const transporter =   nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass:pass,
  },
});
