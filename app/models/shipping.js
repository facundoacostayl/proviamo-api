const mongoose = require("mongoose")

const ShippingScheme = new mongoose.Schema({
    shippingId: {
        type: Number
    },
    order: {
        type: [{
            id: Number,
            productName: String,
            price: Number,
        }]
    },
    total: {
        type: Number
    },
    shippingData: {
        type: [{
            clientName: String,
            clientLastName: String,
            clientPhone: Number,
            clientEmail: String,
            shippingType: String,
            shippingDate: Date,
            branchAddress: String,
            shippingAddress: String,
            shippingNumber: Number,
            shippingDoorbell: String,
            shippingOtherLines: String,
            shippingCity: String,
            shippingPostalCode: Number,
            razonSocial: String,
            cuit: String,
            comments: String
        }]
    },
    dateAndHour: {
        type: Date
    },
    status: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model("shipping", ShippingScheme);