const router = require('express').Router();
const productsRoutes = require('./products');
const usersRoutes = require('./users');
const filtersRoutes = require('./filters')
const imagesRoutes = require('./images')
const stripeRoutes = require('./stripe')
const notificationsRouter=require('./notifications')
const orderRoutes = require('./order')
const reviewsRoutes = require('./reviews')

router.get('/', (req, res)=> res.send('Hello'))  // solo para pruebas luego borrar

/* products routes */
router.use('/products', productsRoutes);

/* users routes */
router.use('/users', usersRoutes);

/* filters routes*/
router.use('/filter', filtersRoutes);

/* orders routes*/

router.use('/orders',orderRoutes);

/* reviews routes*/
router.use('/reviews',reviewsRoutes)

/* post images in Cloudinary*/
router.use('/img', imagesRoutes)

/* stripe checkout routes */
router.use('/api', stripeRoutes)

router.use('/send-notification',notificationsRouter)

module.exports = router;
