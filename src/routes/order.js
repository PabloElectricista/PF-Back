const router = require('express').Router();

const addOrder = require('../controlers/orders/addOrder');
const getOrder = require('../controlers/orders/getOrder');
const getOrders = require('../controlers/orders/getOrders');
const getUserOrders = require('../controlers/orders/getUserOrders');
const deleteOrder = require('../controlers/orders/deleteOrder');
const deleteUsersOrder = require('../controlers/orders/deleteUsersOrder');
const updateOrder = require('../controlers/orders/updateOrder');

router.get('/', getOrders);   //  todas las ordenes -  c/u con los prod, comp y vend

router.get('/user/:userid', getUserOrders);     //  todas las ordenes de un usuarios

router.get('/:id', getOrder);   //   una sola orden en especifico

router.post('/', addOrder);    //   nueva orden

router.delete('/users/:id', deleteUsersOrder);      // se borra la referencia a la cuenta de un usuario

router.delete('/:id/user/:userid', deleteOrder);   //  se borra la cuenta de raiz

router.put('/:id', updateOrder);   //  se actualiza una orden

module.exports =  router
