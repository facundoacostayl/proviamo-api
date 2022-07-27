const { productModel } = require('../models');
const handleError = require("../utils/handleError")

const getProducts = async (req, res) => {
    try {
        const data = await productModel.find({});

        res.send(data);
    } catch (e) {
        handleError(res, "No se ha encontrado la lista", 401)
    }

}

module.exports = { getProducts };