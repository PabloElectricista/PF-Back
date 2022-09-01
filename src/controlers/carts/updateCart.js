const Cart = require("../../models/Cart");

const updateCart = async (req, res, ) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
            }
          );
          res.status(204).json(updatedCart);
    } catch (error) {
        console.log(error);   
        res.status(500).send('error al actualizar el cart')
    }
}

module.exports = updateCart;