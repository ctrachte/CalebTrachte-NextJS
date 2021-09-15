export default function (req, res) {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const PASSWORD = process.env.password

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'admin@calebtrachte.com',
          pass: PASSWORD,
        },
        secure: true,
      })
    console.log(req.body)
  }