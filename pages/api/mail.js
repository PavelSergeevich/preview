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
    from: 'mail.dikardi@gmail.com',
    to: 'pasha.dubinka@gmail.com',
    subject: `Новая запись от ${req.body.name}`,
    html: `<p>${process.env.CONTACT_FORM_PHONE}: ${req.body.phone}</p><div>Комментарий: ${req.body.message}</div>`,
  }
  transporter.sendMail(mailData, function (err, info) { 
    if(err)
      console.log(err)
      
    else
      console.log(info)
  })
  res.status(200)

  
}