const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')

//Import Models
const User = require('../model/User');
const Admin = require('../model/Admin');


//Get all registered users
router.get('/users', async (req, res) => {
  try {
    const allUsers = await User.find()
    res.json(allUsers)
    console.log(allUsers);
  }
  catch (err) {
    res.json({ message: err });
    console.log(err)
  }
});

//Get specific users
router.get('/:userId', async (req, res) => {
  try {
    const getUsers = await User.findById(req.params.userId);
    res.json(getUsers).status(201);
  }
  catch(err) {
    res.json({message: err})
  }
  
});

//Delete Users
router.delete('/:userId', async (req, res) => {
  try {
    const removedUser = await User.remove({_id: req.params.userId});
    res.json(removedUser);
  }
  catch(err) {
    res.json({message: err})
  }
}) 

//Update a users info

router.patch('/:userId', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { fullname: req.body.fullname } }
    );
    res.json(updatedUser);
    console.log(updatedUser);
  }
  catch (err) {
    res.json({ message: err });
    console.log(err)
  }
});

//SIGNUP
router.post('/register', userController.register);


//User Login
router.post('/login', async (req, res) => {

  //Checking if email already exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email doesnt exit');

  //PASSWORD IS CORRECT
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Password');

  //Create Token and assign
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token);
  
})




//Admin Login
router.post('/admin', adminController.admin)

//Update Admin password

router.patch('/:adminId', async (req, res) => {
  try {
    const adminPass = await Admin.updateOne(
      { _id: req.params.adminId },
      { $set: { email: req.body.email } }
    );
  
    res.json(adminPass);
    console.log('adminpass', adminPass)
  } 
  catch (err) {
    res.json({message: err})
    console.log(err);
  }
})


module.exports = router;