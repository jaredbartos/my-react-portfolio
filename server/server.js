const express = require('express');
const { transporter } = require('./config/config');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

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