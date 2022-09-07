const Order = require("../../models/Order");

const getOrders = async (req, res) => {

    try {
        const orders = await Order.find({}).
            populate({ path: "user products userseller"})
        res.json(orders)
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = getOrders;
