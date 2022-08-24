const upload = require('../../multer')
const router = require('express').Router();
const productsRoutes = require('./products');
const usersRoutes = require('./users');
const filtersRoutes = require('./filters')
const imagesRoutes=require('./images')
const {postImgCloudinary}=require('../controlers/cloudinary/cloudinary');
/* products routes */
router.use('/products', productsRoutes);

/* users routes */
router.use('/users', usersRoutes);

/* filters routes*/
router.use('/filter',filtersRoutes)

router.use('/img',imagesRoutes)
module.exports = router;

