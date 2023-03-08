const express = require('express');
const teamsController = require('../controllers/teams.controller');

const router = express.Router();

router.get('/', teamsController.getAllTeams)
router.get('/players', teamsController.getAllTeamsWithPlayers)
router.post('/', teamsController.registerTeam)
router.delete('/:id', teamsController.deleteTeam)

module.exports = router;