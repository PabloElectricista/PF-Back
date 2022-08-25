const router = require('express').Router();

const productsRoutes = require('./products');

const usersRoutes = require('./users');

const filtersRoutes = require('./filters')

router.get('/', (req, res)=> res.send('Hello'))

/* products routes */
router.use('/products', productsRoutes);

/* users routes */
router.use('/users', usersRoutes);

/* filters routes*/
router.use('/filter',filtersRoutes)

module.exports = router;
