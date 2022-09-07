const Order = require("../../models/Order");

const getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id }).populate(["user products userseller"])
        res.json(order);
    } catch (error) {
        res.status(500).send('error al buscar la orden')
    }
}

module.exports = getOrder;
