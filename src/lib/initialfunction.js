const Product = require("../models/Products");
const axios = require("axios");
require('dotenv').config();
// const URL = process.env.API_MOCK

exports.fillDatabase = async () => {
    try {
        var count = await Product.estimatedDocumentCount()
        console.log(count);
        if (count > 0) return

        const response = await axios.get(process.env.API_MOCK);
        const productsMock = response.data;

        for (const product of productsMock) {
            let newProduct = new Product({
                "name": product.instrument,
                "descript": product.descript,
                "image": product.image,
                "categorie": product.categorie,
                "color": product.color,
                "price": product.price,
                "stock": product.stock,
                "brand": product.brand
            });
            await newProduct.save(function(err,result){
                if (err){
                    console.log(err.message);
                }
                else{
                    console.log(result)
                }
            });
        }
        
    } catch (error) {
        console.log(error.message);
    }
}
