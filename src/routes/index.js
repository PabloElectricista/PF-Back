const router = require('express').Router();
const productsRoutes = require('./products');
const usersRoutes = require('./users');
const filtersRoutes = require('./filters')
const imagesRoutes=require('./images')
const stripeRoutes = require('./stripe')

router.get('/', (req, res)=> res.send('Hello'))


/* products routes */
router.use('/products', productsRoutes);

/* users routes */
router.use('/users', usersRoutes);

/* filters routes*/
router.use('/filter',filtersRoutes);

/* orders routes*/
router.use('/orders',orderRoutes)

/* post images in Cloudinary*/
router.use('/img',imagesRoutes)

/* stripe checkout routes */
router.use('/api', stripeRoutes)

/*post images in Cloudinary*/
router.use('/img',imagesRoutes)

module.exports = router;
