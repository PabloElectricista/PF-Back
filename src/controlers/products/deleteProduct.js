const Product = require("../../models/Products");
const Order = require("../../models/Order");
const User = require("../../models/User");

const deleteProduct = async (req, res) => {
    try {
        var usercustomers = [];
        const productfound = await Product.findById(req.params.id)
        const userorders = await Order.findById(productfound.user).populate(["user", "products"])
        userorders.forEach(async (order) => {
            const findOne = order.products.find(async (product) => product === productfound._id)
            if (findOne) {
                usercustomers.push(order.user)
                await order.remove()
            }
        });
        /* 
        usercustomers.forEach(user => {
            encontrar comprador/es
            notificar/los baja de orden por cancelacion de producto
        })
        */
        const user = await User.findById(productfound.user)
        user.products = user.products.filter(product => product !== productfound._id)
        await user.save()

        res.send('eliminando el producto ' + productfound.name)
    } catch (error) {
        res.status(500).send('error al eliminar el producto')
    }
}

module.exports = deleteProduct;

