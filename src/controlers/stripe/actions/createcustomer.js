require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createcustomer = () => {
    console.log(process.env.STRIPE_PRIVATE_KEY);
/*     stripe.customers.create({
        description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
    })
        .then(customer => {
            console.log(customer)
            // return customer.id
        })
        .catch(err => console.error(err)) */
}

module.exports = createcustomer;
