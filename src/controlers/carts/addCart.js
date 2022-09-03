const Cart = require("../../models/Cart");

const addCart = async (req, res, next) => {
    try {
        const newCart = new Cart(req.body);
        const cartSaved = await newCart.save();
        console.log(cartSaved);
        res.status(201).json(cartSaved);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });

    }
}

module.exports = addCart;