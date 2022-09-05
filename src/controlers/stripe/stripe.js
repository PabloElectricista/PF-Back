require('dotenv').config();
const Product = require("../../models/Products");
const Users = require("../../models/User");
const addOrder = require('../orders/addOrder')

const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const stripeCheckout = async (req, res) => {
    try {
        const { /* id, */ user, products } = req.body;
        
        const productsdetails = products.map(async item => {
            let { price, user} = await Product.findById(item.products, "price")
                .populate({
                    path: "user", select: "username userData",
                    populate: { path: "userData", select: "accountid cusid" }
                })
            return { 
                ...item, 
                price, 
                userseller: user._id, 
                username: user.username,
                accountid: user.userData.accountid,
                cusid: user.userData.cusid
            }
        })
        const productsresults = await Promise.all(productsdetails)
        /* const users = []
        let j = 0;
        for (const product of productsresults) {
            
        }
 */
        let response = productsresults
        res.json(response)
    } catch (error) {
        res.json({ message: error })
    }
}

const getBalance = async (req, res) => {
    stripe.balance.retrieve()
        .then((balance) => res.json(balance))
        .catch((error) => res.json(error.message))
}

module.exports = {
    stripeCheckout,
    getBalance
};
