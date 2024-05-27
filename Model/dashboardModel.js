const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dashboardSchema = new Schema({
    vehicle_no: {
        type: String,
        required: true
    },
    vehicle_name: {
        type: String,
        required: true
    },
    battery_condition: {
        type: String,
        required: true
    },
    gas_remaining: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    pressure: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Dashboard", dashboardSchema)