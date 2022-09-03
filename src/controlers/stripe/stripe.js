const Product = require("../../models/Products");
const addOrder = require('../orders/addOrder')
require('dotenv').config();

const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const stripeCheckout = async (req, res) => {
    res.send("checkout")
}

const createPayment = async (id, amount, description) => {
    return await await stripe.paymentIntents.create({
        amount: amount * 100,       // dolar a cents amount
        currency: "usd",
        payment_method: id,
        description,
        confirm: true
    })
}

const getBalance = async (req, res) => {
    stripe.balance.retrieve()
        .then((balance) => res.json(balance))
        .catch((error) => console.log(error))
}

const createAccount = async () => {
    try {
        const { id } = await stripe.accounts.create({ type: 'standard' })
        return id;
    } catch (error) {
        console.log(error.message);
    }
}

const createtransfer = async (amount, accountid, description) => {
    try {
        const response = await stripe.transfers.create({
            amount,
            currency: "usd",
            destination: accountid,
            description
        })
        return response

    } catch (error) {
        console.log(error.message)
    }
}

const listaccounts = async () => {
    try {
        const { data } = stripe.accounts.list()
        return data
    } catch (error) {
        console.log(error.message)
    };
}

module.exports = {
    stripeCheckout,
    getBalance,
    createAccount,
    createtransfer,
    listaccounts
};