const Order = require("../../models/Order");

const updateOrder = async (req, res, ) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
            }
          );
          res.status(204).json(updatedOrder);
    } catch (error) {
        console.log(error);   
        res.status(500).send('error al actualizar la orden')
    }
}

module.exports = updateOrder;
