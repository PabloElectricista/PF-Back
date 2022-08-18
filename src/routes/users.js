const router = require('express').Router();
const getUser = require('../controlers/users/getUser');
const getUsers = require('../controlers/users/getUsers');
const addUser = require('../controlers/users/addUser');
const updateUser = require('../controlers/users/updateUser');
const deleteUser = require('../controlers/users/deleteUser');

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', addUser)

router.post('/login', addUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports =  router