require('dotenv').config();

const sendForm = (req, res) => {
  const { formName, formEmail, formMessage } = req.body;
  const myEmail = process.env.EMAIL;
}