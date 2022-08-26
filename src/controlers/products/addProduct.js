const Product = require("../../models/Products");
const User = require("../../models/User");
const Sale = require("../../models/Sale");

const addProduct = async (req, res, next) => {
    const { userid } = req.body
    try {
        const newProduct = new Product(req.body);
        const productSaved = await newProduct.save();
        const seller = User.findById(userid).
            populate({ path: "sales" })
        seller.sales.onsales = seller.sales.onsales.concat(newProduct._id)
        res.status(201).json(productSaved);
    } catch (error) {
        res.send({ error: error.message });

    }
}

module.exports = addProduct;
