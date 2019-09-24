const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();


//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
  {useNewUrlParser: true },
  () => console.log('Connected to db!!')
);
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app up and running'))