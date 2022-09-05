require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createtransfer = (amount, account, description) => {
    stripe.transfers.create({
        amount,
        currency: "usd",
        destination: account,
        description
    })
        .then((res) => {
            console.log(res)
            return res
        })
        .catch(error => console.error(error.message));
}

module.exports = createtransfer;
