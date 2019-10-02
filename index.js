const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//configure dotenv 
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{useNewUrlParser: true },
  () => console.log('Connected to db!!') 
);


//Middleware
app.use(bodyParser.json());


//Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app up and running'));