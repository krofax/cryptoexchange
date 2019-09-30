const router = require('express').Router();
const User = require('../model/User');

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
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;