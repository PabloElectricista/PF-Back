const Order = require("../../models/Order");

const getOrder = async (req, res) => {
    const { userId } = req.params
    try {
        const order = await Order.findOne({ user: req.params.userid }).populate(["user", "products"])
        res.json(order);
        const order = await Order.find({ userId: userId }).populate('products');
        return res.json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al buscar la orden')
    }
}

module.exports = getOrder;
