const Cart = require("../../models/Cart");

const getCart = async (req, res, next) => {
    try {
        const carts = await Cart.find()
        console.log(carts);
        res.json(carts)
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}

module.exports = getCart;