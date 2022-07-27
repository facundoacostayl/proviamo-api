const { shippingModel } = require('../models');
const { handleError } = require("../utils/handleError");

const getShippingData = async () => {
    try {
        const data = await shippingModel.find();

        res.send(data)
    } catch (e) {
        handleError(res, "ERROR_GET_SHIPPING_DATA", 401)
    }
}

module.exports = {getShippingData}