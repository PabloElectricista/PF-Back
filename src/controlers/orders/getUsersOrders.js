const User = require("../../models/User");

const getUsersOrders = async (req, res) => {
    try {
        const usersorders = await User.find({}).populate({ path: "orders"})
        res.json(usersorders)
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}

module.exports = getUsersOrders;
