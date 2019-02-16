const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log('mongodb connected');
  })
  .catch(error => console.log(error));

app.get('/', (req, res) => {
  res.send('test');
});

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('server started on port : ', port);
});
