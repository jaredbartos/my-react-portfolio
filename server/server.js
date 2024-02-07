const express = require('express');
const { transporter } = require('./config/config');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () =>  {
  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to send emails');
    }
  })
  console.log(`Back-end is listening on port ${PORT}`)
});