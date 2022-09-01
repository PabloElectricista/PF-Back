const router = require('express').Router();

const addCart = require('../controlers/carts/addCart');
const getCart = require('../controlers/carts/getCart');
const getCarts = require('../controlers/carts/getCarts');
const updateCart = require('../controlers/carts/updateCart');
const deleteCart = require('../controlers/carts/deleteCart');



router.get('/', getCarts);

router.get('/:id', getCart);

router.post('/', addCart);

router.delete('/:id', deleteCart);

router.put('/:id', updateCart);

module.exports =  router