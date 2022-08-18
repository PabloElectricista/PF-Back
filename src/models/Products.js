const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: 
        { type: String, required: true, unique: true },
        description:
        { type: String, required: true },
        img: 
        { type: String, required: true },
        categorie: 
        { type: Array},
        color: 
        { type: String, required: true },
        price: 
        { type: Number, required: true },
        stock:
        {type: Number, default: 0}
       
    },
    { timestamps: true }
);

module.exports=mongoose.model('Product', ProductSchema)