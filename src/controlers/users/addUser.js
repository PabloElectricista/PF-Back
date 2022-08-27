const CryptoJS = require("crypto-js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Sale = require('../../models/Sale')
const User = require("../../models/User");
const UserData = require('../../models/UserData');

const addUser = (async (req, res) => {
    const newUserdata = new UserData(req.body.userdata)
    req.body.userData = newUserdata._id
    const newUsersales = new Sale(new mongoose.Types.ObjectId())
    req.body.sales = newUsersales._id
    
    const newUser = new User({
        ...req.body ,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });
    const saveUser = newUser.save();
    const saveData = newUserdata.save()
    const saveSales = newUsersales.save()

    try {
        await Promise.all([saveUser, saveData, saveSales])
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = addUser;