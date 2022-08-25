const Order = require("../../models/Order");

const addOrder = async (req, res, next) => {
    try {
        const nerOrder = new Order(req.body);
        const orderSaved = await nerOrder.save();
        console.log(orderSaved);
        res.status(201).json(orderSaved);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });

    }
}

module.exports = addOrder;