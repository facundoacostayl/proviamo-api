require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = 4000;

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

module.exports = {
    app,
    port
}