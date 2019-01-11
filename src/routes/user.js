const express = require('express');
const router = express.Router();

const User = require('../model/User'); 

//METHOD POST
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({
    status: 'user saved'
  });
});

module.exports = router;