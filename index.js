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
let dev_db_url = 'mongodb://cryptouser:krofax123@ds329058.mlab.com:29058/crypto';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,
  { useNewUrlParser: true },
  () => console.log('connected to DB!!'));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Middleware
app.use(bodyParser.json());


//Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app up and running'));