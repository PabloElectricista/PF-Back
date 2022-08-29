const Order = require("../../models/Order");
// const User = require("../../models/User");

const updateOrder = async (req, res,) => {
    const { status } = req.body
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
            }
          ).populate({path:'user products userseller'})

        //const userseller = await User.findById(updatedOrder.userseller).populate(sales)

        // const username = order.usuario.name
        // const email = order.usuario.email
        switch (status) {
            case 'processing':
                console.log("processing");
                // enviar mail comprador
                break;
            case 'completed':
                console.log("completed");
                // enviar mail a vendedor y comprador
                // actualizar sales de userseller 
                // actualizar stock del producto
                break;
            case 'cancelled':
                console.log("cancelled");
                // enviar mail a vendedor y comprador
                // actualizar sales de userseller 
                break;
            case 'sent':
                console.log("sent");
                // enviar mail comprador
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
