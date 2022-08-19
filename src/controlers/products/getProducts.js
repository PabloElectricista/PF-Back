const Product = require("../../models/Products");

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        console.log(products);
        res.json(products)
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}

module.exports = getProducts;