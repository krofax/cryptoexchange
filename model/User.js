const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  withdraw: {
    type: String,
    required: true
  },
  btcaddress: {
    type: String,
    required: true
  },
  dollar: {
    type: String,
    required: true
  },
  bitcoin: {
    type: String,
    required: true
  },
  date_Dollar: {
    type: Date,
    default: Date.now
  },
  date_btc: {
    type: Date,
    default: Date.now
  },
  date_withdraw: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);