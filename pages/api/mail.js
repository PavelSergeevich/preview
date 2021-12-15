var clientUser = process.env.CLIENT_USER;

export default function (req, res) {

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: clientUser,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
      expires: 1484314697598,
    },
  });
  const mailData = {
    from: "Mail Dikardi <mail.dikardi@gmail.com>",
    to: process.env.MAIL_TO,
    subject: `Новая запись от ${req.body.name}`,
    html: `<p>${process.env.CONTACT_FORM_PHONE}: ${req.body.phone}</p><div>Комментарий: ${req.body.message}</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
