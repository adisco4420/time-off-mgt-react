const express = require('express');
const router = express.Router();
const LeaveModel = require('../models/LeaveModel');
const EmployeeModel = require('../models/EmployeeModel');
const AuthMiddleWare = require('../middlewares/auth');
const dotevn =  require('dotenv');
dotevn.config();


// creating an leave request
router.post('/', AuthMiddleWare, async function (req, res) {
    try {
        const employee = await EmployeeModel.findById(req.user)
        const leaveRequest = await LeaveModel.create({
            leave_type: req.body.leave_type,
            from_date: req.body.from_date,
            to_date: req.body.to_date,
            user_id: req.user,
            date_created: new Date(),
            name: `${employee.firstName} ${employee.lastName}`,
            department: employee.department
        })
        res.status(200).json({status: 'success', data: leaveRequest})
    } catch (error) {
       res.status(500).json({status:'error', message: error});
    }
})

// get a user leave request
router.get('/', AuthMiddleWare,  async function (req, res) {
    try {
        const leaveRequest = await LeaveModel.find({user_id: req.user});
        res.status(200).json({status: 'success', data: leaveRequest})      
    } catch (error) {
       res.status(500).json({status:'error', message: error});
    }
})

module.exports = router;