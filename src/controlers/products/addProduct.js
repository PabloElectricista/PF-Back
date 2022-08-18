const Product = require("../../models/Products");

const addProduct = async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        const productSaved = await newProduct.save();
        console.log(productSaved);
        res.status(201).json(productSaved);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });

    }
}

module.exports = addProduct;