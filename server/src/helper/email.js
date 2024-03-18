const nodemailer = require("nodemailer");
const { smtpUserName, smtpPassword } = require("../secrict");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: smtpUserName,
    pass: smtpPassword,
  },
});

const emailNodmailer = async(emailData)=>{
    try{
        const mailOption ={
            from:smtpUserName,
            to: emailData.email, // list of receivers
            subject: emailData.subject,// Subject line
            html: emailData.html // html body
        }
        let info = await transporter.sendMail(mailOption);
        console.log('email send :',info.response);
        return info
    }catch(error){
        console.error("error occured while sending email :",error);
        throw error

    }
}

module.exports = emailNodmailer
