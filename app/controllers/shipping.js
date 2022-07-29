const { shippingModel, productModel } = require('../models');
const { handleError } = require("../utils/handleError");

/**MERCADO PAGO */
const mercadopago = require("../../config/mercadopago");
/*****/

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
        const {order} = req.body;
        const ids = order.finalOrder.map(p => p.id);
        const productsCopy = await productModel.find();

        let preference = {
            items: [],
            back_urls: {
              success: "http://localhost:4000/api/1.0/shipping/feedback",
              failure: "http://localhost:4000/api/1.0/shipping/feedback",
              pending: "http://localhost:4000/api/1.0/shipping/feedback",
            },
            auto_return: "approved",
          };

          ids.forEach(id => {
            const product = productsCopy.find(product => product.id === id);

            preference.items.push({
                title: product.title,
                unit_price: product.price,
                quantity: 1,
              })
          })

          const response = await mercadopago.preferences.create(preference);
          const preferenceId = response.body.id;
          order.total = order.total;
          order.date = new Date().toISOString();
          order.preferenceId = preferenceId;
          order.status = "Pending";
          const orders = await shippingModel.find(); //GET ORDER TABLE FROM DB
          orders.push(order);
          await shippingModel.findOneAndUpdate(); //ADD ORDER TO DB ORDER TABLE
          res.send({preferenceId})



    }catch(e) {
        handleError(res, "ERROR_POST_SHIPPING_DATA", 401)
    }
}


    const getFeedback = async(req, res) => {
        try{
            const payment = await mercadopago.payment.findById(req.query.payment_id);
            const merchantOrder = await mercadopago.merchant_orders.findById(payment.body.order.id);
            const preferenceId = merchantOrder.body.preference_id;
            const status = payment.body.status;
            await repository.updateOrderByPreferenceId(preferenceId, status);

            const orders = await shippingModel.find(); //GET ORDER TABLE DATA FROM DB
            const order = orders.find(o => o.preferenceId === preferenceId);
            order.status = status;
            await shippingModel.findOneAndUpdate(); //UPDATE DB ORDER TABLE STATUS
          
            res.sendFile(require.resolve("./frontend/index.html"));
          
            
            }catch(e){
              console.log("ERROR " + e.toString())
            }
    }

module.exports = {getShippingData, getShippingProducts, getShippingClientData, addShippingData, getFeedback}