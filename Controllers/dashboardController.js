const asyncHandler = require("express-async-handler")

const Dashboard = require("../Model/dashboardModel")

//@dec Get dashboard
//@route Get /api/dashboard/vehicle_no
//@access public

const getDashboard = asyncHandler(async (req, res) => {
    const dashboard = await Dashboard.findOne({ vehicle_no: req.params.vehicle_no })
    if(!dashboard){
        res.status(404)
        throw new Error("Dashboard Not Found")
    }
    res.status(200).json(dashboard)
})

//@dec Create new dashboard
//@route POST /api/dashboard
//@access public

const createDashboard = asyncHandler(async (req, res) => {
    const {vehicle_no, vehicle_name, battery_condition, gas_remaining, temperature, pressure } = req.body
    if(!vehicle_no || !vehicle_name || !battery_condition || !gas_remaining || !temperature || !pressure){
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const dashboard = await Dashboard.create({vehicle_no, vehicle_name, battery_condition, gas_remaining, temperature, pressure})
    res.status(201).json(dashboard)
})


module.exports = { getDashboard, createDashboard }