const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require("../model/User");

exports.userLogin = async (req, res) => {

  //Checking if email already exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email doesnt exit');

  //PASSWORD IS CORRECT
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Password');

  //Create Token and assign
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token);
  
};