const Product = require("../../models/Products");
const User = require("../../models/User");

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const productSaved = await newProduct.save();
        productSaved.user = User.findById(req.body.user)

        res.status(201).json(productSaved);
    } catch (error) {
        res.send({ error: error.message });

    }
}

module.exports = addProduct;
