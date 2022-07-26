const express = require('express');
const app = express();
const router = express.Router();

router.get("/products", (req, res) => {
    console.log(req);
    return res.status(200);
})

module.exports = router;