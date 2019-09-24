const express = require('express')
const router = express.Router()
const {listUsers, showUser, createUser, updateUser, deleteUser} = require('../controllers/users_controller.js');

router.get('/users', listUsers);
router.get('/users/:id', showUser);
// router.post('/users', createUser);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

module.exports = router;