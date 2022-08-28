const Order = require("../../models/Order");

const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({}).populate(["user", "products"])
        console.log(orders);
        res.json(orders)
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
        const allOrden = await Order.find({}).populate('users')
        return res.json(allOrden)
      } catch (error) {
        res.send(error.message)
      }
}

module.exports = getOrders;
