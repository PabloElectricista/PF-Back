const router = require('express').Router();
//const {filterProducts}=require('./controllers/filterProducts')
const filterProductsRouter = require('./filterProductsRouter')
// filtrar productos
router.use('/products',filterProductsRouter);


//router.use('/users');

module.exports=router;