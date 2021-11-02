export default function (req, res) {
  require('dotenv').config()
  const USER = process.env.user
  const PASSWORD = process.env.password

  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'test@dikardi.ua',
    to: 'pasha.dubinka@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Email: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p><p>${process.env.CONTACT_FORM_PHONE}: ${req.body.phone}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
      
    else
      console.log(info)
  })
  res.status(200)

  
}