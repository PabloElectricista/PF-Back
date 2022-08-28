const User = require("../../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const getUsers = (verifyTokenAndAdmin, async (req, res) => {
    try {
        const users = await User.find().
            populate({ path: "userData sales purchases orders favorites" }) // purchases orders favorites posts
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = getUsers;