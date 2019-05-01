const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const EmployeeModel = require('../models/EmployeeModel');
const router = express.Router();
const dotevn =  require('dotenv');
dotevn.config();
const AuthMiddleWare = require('../middlewares/auth');
const SECRET = 'motherfucker#^^^#@@&@&&*'
// Create Employee Account
router.post('/register', async function(req, res) {
  let isAdmin = false;
  let callDB = true;
  if (req.body.licenseKey) {
    if (req.body.licenseKey === 'LevelUpAdmin') {
      isAdmin = true;
      callDB = true
    } else {
      res.status(412).json({status: 'error', message: 'invalid license key'});
      callDB = false
    }
  }
  if (callDB === true) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const employee = await EmployeeModel.create({
        isAdmin,
        ...req.body
      });
      const token = jwt.sign({id: employee._id}, SECRET, {expiresIn: '1h'});
      const result = employee.toJSON();
      delete result['password'];
      res.status(200).json({
        status: 'success',
        data: {result: result, token},
      });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({status: 'error', message: 'this email already exist'})
        } else {
          res.status(500).json({
            status: 'error',
            message: err,
          });
        }
  
    }
  }
});

// login 
router.post('/login', async function (req, res) {
  try {
    const employess = await EmployeeModel.findOne({email: req.body.email}, '+password');
    if(!employess) return res.status(404).json({status:'not found', message: 'invalid password or email'});

    const isValidPassword = await bcrypt.compare(req.body.password, employess.password)
    if (!isValidPassword) return res.status(401).json({status:'error', message: 'invalid password or email'})
    
    const result = employess.toJSON();
    delete result['password'];
    const token = jwt.sign({id: employess.id}, SECRET);
    res.status(200).json({result, token})

  } catch (error) {
      res.status(404).json({status: 'error', message: 'error occured'})
    // console.log(error);
  }
})
// get employee profile
router.get('/profile', AuthMiddleWare, async function (req, res) {
  try {
    const profile = await EmployeeModel.findById(req.user)
    if (!profile) return res.status(404).json({status: 'error', message: 'error occured'});
    res.status(200).json({status: 'success', data: profile})
  } catch (error) {
    res.status(500).json({status: 'error', message: 'server error'})
  }
  
})

module.exports = router;
