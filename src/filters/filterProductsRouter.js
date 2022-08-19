const router = require('express').Router();
const {filterProducts}=require('./controllers/filterProducts')
const filterByPriceRange=require('./controllers/filterProductsByPrice')
router.use('/price',filterByPriceRange);
router.use('/',filterProducts)

module.exports=router;