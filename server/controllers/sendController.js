require('dotenv').config();
const { transporter } = require('../config/config');

const sendForm = (req, res) => {
  const { name: formName, email: formEmail, message: formMessage } = req.body;
  const myEmail = process.env.EMAIL;
  const formMailTextContent = `Name: ${formName}
Email: ${formEmail}
Message: ${formMessage}`;
  const formMailHtmlContent = `<p>Name: ${formName}<br>
Email: ${formEmail}<br>
Message: ${formMessage}</p>`;
  const formMailProps = {
    from: formEmail,
    to: myEmail,
    subject: `New Portfolio Message from ${formName}`,
    text: formMailTextContent,
    html: formMailHtmlContent
  };

  transporter.sendMail(formMailProps, (err, data) => {
    console.log(err);
    console.log(data);
    if (err) {
      res.status(500).json({ status: 'fail' });
    } else {
      res.json({ status: 'success' });

      // If sending mail is success, send auto reply message
      const myName = process.env.MYNAME;
      const mySite = process.env.MYSITE;

      const replyMailTextContent = `Hi ${formName},

Thank you for sending me a message. I will get back to you as soon as I can.

${myName}
${mySite}


Message Details
Name: ${formName}
Email: ${formEmail}
Message: ${formMessage}`;
      
      const replyMailHtmlContent = `<p>Hi ${formName},<br>
<br>
Thank you for sending me a message. I will get back to you as soon as I can.<br>
<br>
${myName}<br>
${mySite}<br>
<br>
<br>
Message Details<br>
<br>
Name: ${formName}<br>
Email: ${formEmail}<br>
Message: ${formMessage}</p?`;

      const replyMailProps = {
        from: myEmail,
        to: formEmail,
        subject: 'Message Received',
        text: replyMailTextContent,
        html: replyMailHtmlContent
      };

      transporter.sendMail(replyMailProps, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Message Sent: ${data.response}`);
        }
      });
    }
  });
}

module.exports = { sendForm };