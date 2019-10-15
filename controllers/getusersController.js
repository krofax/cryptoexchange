const User = require("../model/User");

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.json(allUsers)
    console.log(allUsers);
  }
  catch (err) {
    res.json({ message: err });
    console.log(err)
  }
}