const Order = require("../../models/Order");
const User = require("../../models/User");

const addOrder = async (req, res) => {
    try {
        const nerOrder = new Order(req.body);
        const orderSaved = await nerOrder.save();
        const userseller = await User.findById(orderSaved.userseller).populate({path: "orders"})
        if (!userseller) throw new Error("Not Found seller or blocked user"); 

        // enviar notificacion al vendedor   <-----<
        // actualizar sales del vendedor 
        
        if(userseller.orders && userseller.orders.length === 0) userseller.orders = [ orderSaved._id];
        else userseller.orders = [ ...userseller.orders, orderSaved._id ];
        await userseller.save();
        res.status(201).json(orderSaved);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}

module.exports = addOrder;
