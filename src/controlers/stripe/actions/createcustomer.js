require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
console.log(process.env.STRIPE_PRIVATE_KEY);

// const createcustomer = () => {
    stripe.customers.create({
        description: 'My First Test Customer (created for API)',
    })
        .then(customer => {
            console.log(customer)
            // return customer.id
        })
        .catch(err => console.error(err)) 
//  } 

// module.exports = createcustomer;
