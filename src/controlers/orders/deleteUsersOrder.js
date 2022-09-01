const User = require("../../models/User");
const Order = require("../../models/Order");

const deleteUsersOrder = async (req, res) => {
    try {
        const orderfound = await Order.findByIdAndDelete(req.params.id)
        if(!orderfound) throw new Error("order not found")
        const user = await deleteorder("user", orderfound)
        const userseller = await deleteorder("userseller", orderfound)
        // notificar user 
        // notificar userseller 
        res.send(`eliminando la orden ${req.params.id}`)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al eliminar la orden')
    }
}

module.exports = deleteUsersOrder;

async function deleteorder(user, order) {
    const userfound = await User.findById(order[user]).populate({ path: "orders" })
    if (!userfound) return
    if (userfound.orders && userfound.orders.length > 0) userfound.orders = userfound.orders.filter[order => order !== order._id];
    return await userfound.save();
}
