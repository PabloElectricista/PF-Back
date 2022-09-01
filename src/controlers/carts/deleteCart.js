const Cart = require("../../models/Cart");

const deleteCart = async (req, res) => {
    try {
        await Cart.findOneAndDelete({ _id: req.params.id });
        res.send('eliminando el cart con id: ' + req.params.id)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al eliminar el cart')
    }
}

module.exports = deleteCart;
