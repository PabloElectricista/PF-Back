const User = require("../../models/User");
const CryptoJS = require("crypto-js");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const updateUser = (verifyTokenAndAuthorization, async (req, res) => {
    // const { email } = req.query
    // try {
    //   if (Object.keys(req.body).length === 0) throw new Error('Send propertys')
    //   const user = await User.findByIdAndUpdate(email, req.body, { new: 1 })
    //   res.json(user)
    // } catch (error) {
    //   res.send(error.message)
    // }
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        var user = await User.findOneAndUpdate(
            { email: req.params.email },
            { $set: req.body },
            { new: true }
        )
        // if (!user) user = await User.find({ email: req.params.email })
        // await UserData.findOneAndUpdate(
        //     user.userData,
        //     { $set: req.body },
        //     { new: true }
        // )
        // user = await User.findOne({ email: req.params.email })
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = updateUser;
