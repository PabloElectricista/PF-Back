const Product = require("../../models/Products");

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find().populate({path:"user"})
        for (const product of products) {
            product.user.password = ""
        }
        res.json(products)
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = getProducts;