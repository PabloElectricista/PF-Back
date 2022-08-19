const router = require('express').Router();
const filters = require('../controlers/products/filters');

router.get('/', filters)

module.exports =  router
