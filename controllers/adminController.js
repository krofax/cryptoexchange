const Admin = require('../model/Admin');

exports.admin = async (req, res) => {
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
};