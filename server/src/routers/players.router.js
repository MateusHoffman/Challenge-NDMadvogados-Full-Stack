const express = require('express');
const playersController = require('../controllers/players.controller');

const router = express.Router();

router.get('/', playersController.getAllPlayers)
router.post('/', playersController.registerPlayer)
router.delete('/:id', playersController.deletePlayer)
router.put('/:id', playersController.editPlayer)

module.exports = router;