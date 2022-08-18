const router = require('express').Router();

const productsRoutes = require('./products');
const usersRoutes = require('./users');

/* products routes */
router.use('/products', productsRoutes);

/* users routes */
router.use('/users', usersRoutes);

module.exports = router;
