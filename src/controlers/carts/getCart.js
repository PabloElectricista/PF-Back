const Cart = require("../../models/Cart");

const getCart = async (req, res) => {
    try {
        const cart = await Cart.find({product: req.params.id});
        res.json(cart);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al buscar el cart')
    }
}

module.exports = getCart;
