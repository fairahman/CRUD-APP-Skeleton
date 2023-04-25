const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello world!' });
});

app.listen(PORT, () => {
  console.log('server is running');
});
