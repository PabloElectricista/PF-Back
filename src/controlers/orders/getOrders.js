const Order = require("../../models/Order");

const getOrders = async (req, res, next) => {
    try {
        const allOrden = await Order.find({}).populate('users')
        return res.json(allOrden)
      } catch (error) {
        res.send(error.message)
      }
}

module.exports = getOrders;