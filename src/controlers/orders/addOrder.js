const Order = require("../../models/Order");
const User = require("../../models/User");
const Products = require("../../models/Products");

const addOrder = async (req, res) => {
    const { products } = req.body;
    try {
        products.forEach(product => {
            updeteStock(product.products, product.quantity)
        });
        const nerOrder = new Order(req.body);
        const orderSaved = await nerOrder.save();
        await saveorder("user", orderSaved)
        /* const userseller =  */await saveorder("userseller", orderSaved)

        // enviar notificacion al vendedor  (userseller) <-----<
        // actualizar sales del vendedor 

        res.status(201).json(orderSaved);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}

module.exports = addOrder;

async function saveorder(user, order) {
    const userfound = await User.findById(order[user]).populate({ path: "orders" })
    if (!userfound) throw new Error(`${user} not Found or blocked`);
    if (userfound.orders && userfound.orders.length === 0) userfound.orders = [order._id];
    else userfound.orders = [...userfound.orders, order._id];
    return await userfound.save();
}

function updeteStock(productid, quantity) {
    Products.findById(productid).exec(function (error, product) {
        if (error) throw new Error(error);
        if (product) {
            product.stock -= quantity
            product.save()
            return
        }
        console.log("Product not found");
    })
}
