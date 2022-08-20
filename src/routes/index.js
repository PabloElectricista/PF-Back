const router = require('express').Router();

const productsRoutes = require('./products');
const filtersRoutes = require('./filters')

/* products routes */
router.use('/products', productsRoutes);

/* filters routes*/
router.use('/filter',filtersRoutes)
module.exports = router;