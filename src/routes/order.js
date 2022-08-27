const router = require('express').Router();

const addOrder = require('../controlers/orders/addOrder');
const getOrder = require('../controlers/orders/getOrder');
const getOrders = require('../controlers/orders/getOrders');
const deleteOrder = require('../controlers/orders/deleteOrder');
const updateOrder = require('../controlers/orders/updateOrder');


router.get('/:id', getOrder);

router.get('/', getOrders);

router.post('/', addOrder);

router.delete('/:id', deleteOrder);

router.put('/:id', updateOrder);

module.exports =  router