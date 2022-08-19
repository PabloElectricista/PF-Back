const router = require('express').Router();
const {filterProducts}=require('./controllers/filterProducts')

// filtrar productos
router.use('/products',filterProducts);


//router.use('/users');

module.exports=router;