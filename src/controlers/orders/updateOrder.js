const Order = require("../../models/Order");

const updateOrder = async (req, res,) => {
    const { status/* , usersalesId */ } = req.body
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            status,
            {
              new: true,
            }
          ).populate('usuario') //.populate('products')

        // const username = order.usuario.name
        // const email = order.usuario.email
        switch (stastus) {
            case 'processing':
                // enviar mail order processing (username, email)
                break;
            case 'completed':
                // enviar mail order completed (username, email)
                break;
            case 'cancelled':
                // enviar mail order cancelled (username, email)
                break;
            case 'sent':
                // enviar mail order sent (username, email)
                break;
            default:
                throw new Error('status incorrect')
        }
        // updateUserSales(usersalesId, order.products, status)
        res.status(204).json(updatedOrder);
    } catch (error) {
        console.log(error);
        res.status(404).json(error.message)
    }
}

module.exports = updateOrder;
