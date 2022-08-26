const Order = require("../../models/Order");

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al buscar la orden')
    }
}

module.exports = getOrder;