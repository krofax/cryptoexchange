const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//Connect to DB
let mongoDB = process.env.MONGODB_URI || 'mongodb://cryptouser:krofax123@ds329058.mlab.com:29058/crypto'
mongoose.connect(mongoDB,
  { useNewUrlParser: true },
  () => console.log('connected to DB!!'));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes Middleware
app.use('/api/user', authRoute);
let PORT = process.env.PORT ||3000;
app.listen(PORT, () => console.log('app up and running'));