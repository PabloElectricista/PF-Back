const CryptoJS = require("crypto-js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Sale = require('../../models/Sale')
const User = require("../../models/User");
const UserData = require('../../models/UserData');

const addUser = (async (req, res) => {
    const newUserdata = new UserData(req.body.userdata)
    const newUsersales = new Sale()
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    });

    try {
        const userData = await newUserdata.save()
        const sales = await newUsersales.save()
        newUser.userData = userData._id;
        newUser.sales = sales._id;
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
});

module.exports = addUser;