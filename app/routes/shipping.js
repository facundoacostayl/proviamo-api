const express = require("express")
const router = express.Router()
const { getShippingData, getShippingProducts, getShippingClientData, addShippingData, getFeedback } = require('../controllers/shipping')

router.get("/shipping/data", getShippingData)
router.get("/shipping/products", getShippingProducts)
router.get("/shipping/client", getShippingClientData)
router.post("/shipping", addShippingData)
router.get("/shipping/feedback", getFeedback)

module.exports = router