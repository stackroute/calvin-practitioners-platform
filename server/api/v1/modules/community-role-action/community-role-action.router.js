const express = require('express');
const controller = require('./community-role-action.controller');

const router = express.Router();
router.get('/get', controller.retrieveAllUsers);

// router.post('/', controller.createNewUser(req,res));

// router.put('/', controller.updateActions);
// router.delete('/', controller.deleteUser);

module.exports = router;
