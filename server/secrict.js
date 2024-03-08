require("dotenv").config()
const PORT =8000 ;
const mongoUrl = process.env.DB_CONNECT_URL
const smtpUserName=process.env.SMTP_USERNAME
const smtpPassword=process.env.SMTP_PASSWORD
const jwtSecrictKey=process.env.JWT_SECRICKET_KEY

module.exports = {PORT,mongoUrl,smtpUserName,smtpPassword,jwtSecrictKey}