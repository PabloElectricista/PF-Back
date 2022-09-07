require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const atachpayment = (paymentMethodid, customer) => {
    stripe.paymentMethods.attach(
        paymentMethodid,
        customer
    )
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => console.error(err))
}

module.exports = atachpayment

/* stripe.paymentMethods.create({
    type: 'card',
    card: {
        number: '4242424242424242',
        exp_month: 10,
        exp_year: 2024,
        cvc: '214',
    },
})
    .then(res => {
        
    })
    .catch(err => console.log(err)); */
