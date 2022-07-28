const { shippingModel } = require('../models');
const { handleError } = require("../utils/handleError");

const getShippingData = async () => {
    try {
        const {id} = req.params;
        const data = await shippingModel.findById(shippingId === parseInt(id));

        res.send(data)
    } catch (e) {
        handleError(res, "ERROR_GET_SHIPPING_DATA", 401);
    }
}

const getShippingProducts = async () => {
    try {
        const {id} = req.params;
        const data = await shippingModel.findById(shippingId === parseInt(id));

        res.send(data.order)
    }catch(e) {
        handleError(res, "ERROR_GET_SHIPPING_PRODUCTS", 401);
    }
}

const getShippingClientData = async () => {
    try {
        const {id} = req.params;
        const data = await shippingModel.findById(shippingId === id);

        res.send(data.shippingData)
    }catch(e) {
        handleError(res, "ERROR_GET_SHIPPING_CLIENT_DATA", 401)
    }
}

const addShippingData = async () => {
    try {
        
    }catch(e) {
        handleError(res, "ERROR_POST_SHIPPING_DATA", 401)
    }
}

module.exports = {getShippingData, getShippingProducts, getShippingClientData, addShippingData}