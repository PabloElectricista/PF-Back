const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name:
            { type: String, required: true },
        description:
            { type: String },
        image:
            [{ type: String, required: true }],
        categorie:
            { type: String },
        color:
            { type: String, required: true },
        price:
            { type: Number, required: true, min: 0 },
        stock:
            { type: Number, default: 1 },
        brand:
            { type: String, required: true },
        location:
            { type: String },
        status:
            { type: String, default: "new" }

    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Product', ProductSchema)