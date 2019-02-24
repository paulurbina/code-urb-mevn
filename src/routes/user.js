const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../model/User'); 
  
//METHOD POST
router.post('/', [
  check('name').isAlpha().isLength({min: 5}).trim().escape().withMessage('Un nombre mayor a 5 caracteres'),
  check('email').isEmail().normalizeEmail().withMessage('Ingrese un email valido'),
  check('subject').isAlphanumeric().isLength({min:10}).trim().escape().withMessage('Ingrese minimo 10 caracteres'),
  check('message').isAlphanumeric().isLength({min:10}).trim().escape().withMessage('Ingrese minimo 10 caracteres')
],async (req, res) => {
  // const { name, email, subject, message } = req.body;
  const errors = validationResult(req.body);
  if(!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }
  else {
    const user = new User(req.body);
    await user.save();
    res.json({
      status: 'user saved'
    });
  }

  // const user = new User(req.body);
  // await user.save();
  // res.json({
  //   status: 'user saved'
  // });
});

module.exports = router;