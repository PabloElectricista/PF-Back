const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");
const UserData = require('../../models/UserData');
const { createaccount } = require('../stripe/actions/createaccount')

const addUser = (async (req, res) => {
    try {
        const newUserdata = new UserData(req.body.userdata)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
            ).toString()
        });

        const id = await createaccount()
        newUserdata.accountid = id
        const userData = await newUserdata.save()
        newUser.userData = userData._id;
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
});

module.exports = addUser;
