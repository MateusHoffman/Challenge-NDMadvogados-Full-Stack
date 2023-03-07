const express = require('express');
const teamsController = require('../controllers/teams.controller');

const router = express.Router();

router.get('/', teamsController.getAllTeams)
// router.get('/path/:id', teamsController.getOneFunction)
// router.post('/path', teamsController.postFunction)
// router.put('/path/:id', teamsController.putFunction)
// router.delete('/path/:id', teamsController.deleteFunction)

module.exports = router;