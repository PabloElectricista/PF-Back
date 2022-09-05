require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createPayment = (id, amount, description, customer) => {
    stripe.paymentIntents.create({
        amount,      
        currency: "usd",
        payment_method: id,
        description,
        confirm: true,
        customer
    })
    .then(res => {
        console.log(res);
        return res
    })
    .catch(err => err.message)
}

module.exports = createPayment;
