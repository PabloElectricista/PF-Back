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
        users.filter(user => {
            const { password, ...others } = user._doc;
            console.log(others);
            user = others
        })
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = getUsers;