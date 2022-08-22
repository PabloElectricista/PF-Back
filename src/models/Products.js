const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: 
        { type: String, required: true, unique: true },
        description:
        { type: String, required: true },
        img: 
        { type: String, required: true },
        category: 
        { type: Array},
        color: 
        { type: String, required: true },
        price: 
        { type: Number, required: true },
        stock:
        {type: Number, default: 0},
        brand:
        {type: String, required: true}
       
    },
    { timestamps: true }
);

module.exports=mongoose.model('Product', ProductSchema)