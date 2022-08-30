const Product = require("../../models/Products");
const User = require("../../models/User");
const Sale = require("../../models/Sale");

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const productSaved = await newProduct.save();

        const user = User.findById(req.body.user)
        const usersales = await Sale.findById(user.sales)
        usersales.onsales.concat(newProduct._id)
        await usersales.save()

        res.status(201).json(productSaved);
    } catch (error) {
        res.send({ error: error.message });

    }
}

module.exports = addProduct;
