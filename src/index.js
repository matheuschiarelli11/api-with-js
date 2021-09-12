const express = require('express');

const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', require('./route/routes'));

app.listen(3333, () => {
  console.log('Server started!');
});