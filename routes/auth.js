const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Import Models
const User = require('../model/User');
const Admin = require('../model/Admin');


//SIGNUP
router.post('/register', async (req, res) => {

  
  //Checking if email already exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exits');
  
  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);


  //create new User
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: hashedPassword,
    phone: req.body.phone,
    address: req.body.address,
    country: req.body.country,
    gender: req.body.gender,
    withdraw: req.body.withdraw,
    btcaddress: req.body.btcaddress,
    dollar: req.body.dollar,
    bitcoin: req.body.bitcoin
  });

  try {
    const saving = await user.save()
    res.send({user: user._id});
  } catch (err) {
    res.status(400).send(err);
  }

});

//User Login
router.post('/login', async (req, res) => {

  //Checking if email already exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email doesnt exit');

  //PASSWORD IS CORRECT
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Password');

  //Create Token and assign
  let tokenSecret = '7865hjhjh76uyuysUGTFRTfjfhj'
  const token = jwt.sign({ _id: user._id }, tokenSecret)
  res.header('auth-token', token).send(token);
  
})

//Admin Login
router.post('/admin', async (req, res) => {
  const admin = new Admin({
    email: req.body.email,
    password: req.body.password
  });

  try {
    const saveAdmin = await admin.save()
    res.json(saveAdmin);
  }
  catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;