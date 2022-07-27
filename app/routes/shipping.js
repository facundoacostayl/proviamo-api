const express = require("express")
const router = express.Router()
const { getShippingData } = require('../controllers/shipping')

router.get("/shipping/data", getShippingData)
router.get("/shipping/products")
router.post("/shipping")

module.exports = router