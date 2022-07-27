const { productModel } = require('../models');
const handleError = require("../utils/handleError")

const getProducts = async (req, res) => {
    try {
        const data = await productModel.find({});

        res.send(data);
    } catch (e) {
        handleError(res, "ERROR_GET_PRODUCTS", 401)
    }
}

const getProduct = async(req, res) => {
    try {
        const {id} = req.params
        const data = await productModel.findById({id})

        res.send(data)
    }catch(e) {
        handleError(res, "ERROR_GET_PRODUCT", 401)
    }
}

module.exports = { getProducts };