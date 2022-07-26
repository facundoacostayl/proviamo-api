require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = 4000;

//routes
const {productRoutes} = require('./routes/product');

//app
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/1.0", require('./routes'));


module.exports = {
    app,
    port
}