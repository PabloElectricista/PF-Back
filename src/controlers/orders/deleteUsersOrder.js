// const User = require("../../models/User");
const Order = require("../../models/Order");

const deleteUsersOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        // const user = await User.findById(req.params.userid).populate({path: "orders"})
        // user.orders = user.orders.filter(order => order._id !== req.params.id)
        // await user.save()
        res.send(`eliminando la orden ${req.params.id} del usuario ${user.username}`)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al eliminar la orden')
    }
}

module.exports = deleteUsersOrder;
