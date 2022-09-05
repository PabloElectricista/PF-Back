require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const listaccounts = () => {
stripe.accounts.list()
    .then(({data}) => {
        console.log(data)
        return data
    })
    .catch(error => console.error(error.message));
}

listaccounts()
