const router = require('express').Router();
const User = require('../model/User');

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
    const saving = await user.save();
    res.json(saving);
    console.log(user)
    res.send('hello world!');
  } catch (err) {
    res.json({ message: err });
    console.log('error', err);
  }
});

router.get('/login', (req, res) => {
  res.send('hello wrold!');
})

module.exports = router;