require('dotenv').config();
const createPayment = require('./actions/createPayment')
const Product = require("../../models/Products");
const Users = require("../../models/User");
const neworders = require('./actions/neworders')

const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const stripeCheckout = async (req, res) => {
    try {
        const { paymentMethodid, customer, products } = req.body;
        console.log("paymentMethodid: " + paymentMethodid);
        const productsdetails = products.map(async item => {
            let { user } = await Product.findById(item.id, "price")
                .populate({
                    path: "user", select: "username userData",
                    populate: { path: "userData", select: "accountid cusid" }
                })
            return {
                user: customer,
                products: [item],
                amount: item.price * item.quantity ,
                userseller: user._id,
                username: user.username,
                accountid: user.userData.accountid,
                cusid: user.userData.cusid,
                payment: "card"
            }
        })
        const productsresults = await Promise.all(productsdetails)
        const users = []
        let j = 0;
        let totalamount = 0;
        for (const product of productsresults) {
            totalamount += product.amount
            if (!!users[j] && users[j].username !== product.username) j++
            if (users.length === 0 || !users[j]) {
                users[j] = product
            }
            else {
                users[j].products.push(product.products[0])
                users[j].amount += product.amount
            }
        }
        const { userData } = await Users.findById(customer, "userData").populate({ path: "userData", select: "accountid cusid -_id" })
        const paymentMethodsresult = await stripe.paymentMethods.attach(
            paymentMethodid,
            { customer: userData.cusid }
        )
        const description = "BGoode product/s purchased"
        const payment = await createPayment(paymentMethodsresult.id, totalamount, description, userData.cusid)
        if (payment.status === "succeeded") {
            const ordersresult = users.map(async user => {
                const transferresult = await stripe.transfers.create({
                    amount: Math.floor(user.amount * 0.988),
                    currency: "usd",
                    destination: user.accountid,
                    description
                })
                let order = {
                    user: user.user,
                    products: user.products,
                    userseller: user.userseller,
                    payment: user.payment
                }
                const ordersaved = await neworders(order)
                return {
                    order: ordersaved,
                    transferresult: transferresult.id
                }
            })
            const orders = await Promise.all(ordersresult)
            return res.json({ paymentstatus: payment.status, ...orders })
        }
        else return res.json({ status: payment.status })
        // res.json("ok")
    } catch (error) {
        res.json({ error: error.message })
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
