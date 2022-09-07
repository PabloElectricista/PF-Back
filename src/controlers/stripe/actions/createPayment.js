require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createPayment = async (id, amount, description, customer) => {
    console.log(id, amount, description, customer);
    try {
        let res = await stripe.paymentIntents.create({
            amount,      
            currency: "usd",
            payment_method: id,
            description,
            confirm: true,
            customer
        })
        console.log(res);
        return res
    } catch (error) {
        return error.message
    }
    
}

module.exports = createPayment;
