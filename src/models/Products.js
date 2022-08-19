const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name:
            { type: String, required: true, unique: false },
        descript:
            { type: String, required: true, unique: false },
        image:
            { type: String, required: true, unique: false },
        categorie:
            { type: String, unique: false },
        color:
            { type: String, required: true, unique: false },
        price:
            { type: Number, required: true, unique: false },
        stock:
            { type: Number, default: 1, unique: false },
        brand:
            { type: String, required: true, unique: false }

    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Product', ProductSchema)