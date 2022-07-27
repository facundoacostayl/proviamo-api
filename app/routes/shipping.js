const express = require("express")
const router = express.Router()

router.get("/shipping/data")
router.get("/shipping/products")
router.post("/shipping")

module.exports = router