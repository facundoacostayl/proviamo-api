const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    subCategory: {
        type: String
    },
    size: {
        type: String
    },
    fiambres: {
        type: String
    },
    quesos: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("products", ProductScheme);

