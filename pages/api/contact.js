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
    const mailData = {
        from: 'admin@calebtrachte.com',
        to: 'cetrachte@hotmail.com',
        subject: `Contact Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
}