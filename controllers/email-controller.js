var nodemailer = require("nodemailer");

const sendEmail = (req, res) => {
  const { email, subject, emailBody } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "goncalobm.portfolio@gmail.com",
      pass: "Dianalopes99.",
    },
  });

  var mailOptions = {
    from: "goncalobm.portfolio@gmail.com",
    to: "goncalobm.portfolio@gmail.com",
    subject: subject,
    text: `Hey! the guy with this email ${email} send the following text:
    ${emailBody}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email Sent!");
    }
  });
};

module.exports = { sendEmail };
