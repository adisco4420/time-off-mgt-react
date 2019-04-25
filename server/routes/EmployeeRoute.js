const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const EmployeeModel = require('../models/EmployeeModel');
const router = express.Router();
const dotevn =  require('dotenv');
dotevn.config();
const SECRET = 'motherfucker#^^^#@@&@&&*'
// Create Employee Account
router.post('/register', async function(req, res) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const employee = await EmployeeModel.create(req.body);
    const token = jwt.sign({id: employee._id}, SECRET, {expiresIn: '1h'});
    const result = employee.toJSON();
    delete result['password'];
    res.status(200).json({
      status: 'success',
      data: {employee: result, token},
    });
  } catch (err) {
      if (err.code === 11000) {
          res.status(400).json({status: 'error', message: 'this email already exist'})
          return;
      }
    res.status(500).json({
      status: 'error',
      message: err,
    });
  }
});

// login 
router.post('/login', async function (req, res) {
  try {
    const employess = await EmployeeModel.findOne({email: req.body.email}, '+password');
    if(!employess) return res.status(404).json({status:'not found', message: 'user not found'});
    const isValidPassword = await bcrypt.compare(req.body.password, employess.password)
    if (!isValidPassword) return res.status(401).json({status:'error', message: 'Invalid password'})

    const token = jwt.sign({id: employess.id}, SECRET);
    res.status(200).json({token})

  } catch (error) {
      res.status(404).json({status: 'error', message: 'error occured'})
    // console.log(error);
  }
})


module.exports = router;
