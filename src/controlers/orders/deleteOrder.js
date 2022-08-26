const Order = require("../../models/Order");

const deleteOrder = async (req, res) => {
    try {
        // uddateSales(req.params.sellerid)   // próximo paso
        await Order.findOneAndDelete({ _id: req.params.id });
        res.send('eliminando la orden con id: ' + req.params.id)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al eliminar la orden')
    }
}

module.exports = deleteOrder;