const router = require('express').Router();
const filters = require('../controlers/filters/filters');

router.get('/', filters)

module.exports =  router
