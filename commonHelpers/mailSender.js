const nodemailer = require("nodemailer");
const keys = require("../config/keys");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  //authorization for sending email
  let transporter = nodemailer.createTransport({
    service: keys.nodemailerService,
    auth: {
      user: keys.nodemailerUser,
      pass: keys.nodemailerPassword
    }
  });

  const mailOptions = {
    from: keys.nodemailerUser,
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};
