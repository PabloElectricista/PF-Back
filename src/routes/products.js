const router = require('express').Router();
const getProducts = require('../controlers/products/getProducts');
const getProduct = require('../controlers/products/getProduct');
const addProduct = require('../controlers/products/addProduct');
const updateProduct = require('../controlers/products/updateProduct');
const deleteProduct = require('../controlers/products/deleteProduct');

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', addProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports =  router