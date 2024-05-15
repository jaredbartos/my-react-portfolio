const { createTransport } = require('nodemailer');
require('dotenv').config();

const transport = {
  service: process.env.SERVICE,
  host: process.env.HOST,
  port: process.env.MAILPORT,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
};

const transporter = createTransport(transport);

module.exports = { transporter };
