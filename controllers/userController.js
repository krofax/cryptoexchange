const bcrypt = require("bcryptjs");
const User = require("../model/User");

exports.register = async (req, res) => {
  //Checking if email already exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exits");

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
    const saving = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
};
