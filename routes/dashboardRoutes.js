const express = require("express")

const router = express.Router()

const {getDashboard, createDashboard} = require("../Controllers/dashboardController")

router.route("/").post(createDashboard)
router.route("/:vehicle_no").get(getDashboard)

module.exports = router