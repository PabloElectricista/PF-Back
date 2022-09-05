const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const User = require("../../models/User");
const UserData = require('../../models/UserData');

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

        var {id} = await stripe.accounts.create({
            type: 'standard',
          })
        newUserdata.accountid = id
        var {id} = await stripe.customers.create({
            description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
          })
        newUserdata.cusid = id
        const userData = await newUserdata.save()
        newUser.userData = userData._id;
        const saveUser = await newUser.save();
        saveUser.userData = userData
        res.status(201).json(saveUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
});

module.exports = addUser;
