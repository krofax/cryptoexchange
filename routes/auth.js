const router = require('express').Router();

//Routers
const User = require('../model/User');
const Admin = require('../model/Admin');

//SIGNUP
router.post('/register', async (req, res) => {
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
    country: req.body.country,
    btcaddress: req.body.btcaddress
  });

  try {
    const saving = await user.save()
    console.log(saving)
    res.json({user});
    console.log(user)
  } catch (err) {
    res.json({ message: err });
    console.log('error', err);
  }
});

//Admin Login
router.post('/login', async (req, res) => {
  const admin = new Admin({
    email: req.body.email,
    password: req.body.password
  });

  try {
    const saveAdmin = await admin.save()
    console.log(saveAdmin)
    res.json(saveAdmin);
  }
  catch (err) {
    res.json({ message: err });
    console.log('error', err);
  }
});

module.exports = router;