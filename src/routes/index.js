const upload = require('../../multer')
const router = require('express').Router();
const productsRoutes = require('./products');
const usersRoutes = require('./users');
const filtersRoutes = require('./filters')
const {postImgCloudinary}=require('../controlers/cloudinary/cloudinary');
/* products routes */
router.use('/products', productsRoutes);

/* users routes */
router.use('/users', usersRoutes);

/* filters routes*/
router.use('/filter',filtersRoutes)

router.post('/img',upload.array('image',4),postImgCloudinary)
module.exports = router;

