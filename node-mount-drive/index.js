const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/home', (req, res) => {
  res.json({
    message: 'Okay Home is running ...',
  });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Okay API is running ...',
  });
});
app.get('/test', (req, res) => {
  res.json({
    message: 'Okay test is running ...',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`started the server at port ${process.env.PORT}`);
});
