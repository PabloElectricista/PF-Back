const Product = require("../../models/Products");
require('dotenv').config();

const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const stripeCheckout = async (req, res) => {
    try {
        const { id, amount, idprod } = req.body; 
        const { description } = await Product.findById(idprod);
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method: id,
            description,  
            confirm: true
        })
        res.send({ message: `Payment ${payment.status}` })
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports = stripeCheckout;