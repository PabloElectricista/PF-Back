const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const CartSchema = new Schema(
    {
        user:
            { type: String, required: true },
        userType:
            { type: String, required: true },
        userName:
            { type: String, required: true },
        products: [{type: Schema.Types.ObjectId, ref: 'Products'}]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema)
