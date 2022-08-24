const router = require('express').Router();
// const { verifyTokenAndAuthorization} = require("../controlers/users/verifyToken")

const stripeCheckout = require('../controlers/stripe/stripeCheckout');

router.post("/checkout", /* verifyTokenAndAuthorization, */ stripeCheckout)

module.exports = router;
