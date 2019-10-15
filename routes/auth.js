const router = require('express').Router();

const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')
const userloginController = require('../controllers/userloginController')
const getusersController = require('../controllers/getusersController')
//Import Models
const User = require('../model/User');
const Admin = require('../model/Admin');


//Get all registered users
router.get('/users', getusersController.getUsers);

//SIGNUP
router.post('/register', userController.register);

//User Login
router.post('/login', userloginController.userLogin)

//Admin Login
router.post('/admin', adminController.admin)


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