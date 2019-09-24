const express = require('express');
const mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb+srv://crypto:change@cluster0-4ropq.mongodb.net/test?retryWrites=true&w=majority',
  {useNewUrlParser: true },
  () => console.log('Connected to db!!')
);
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app up and running'))