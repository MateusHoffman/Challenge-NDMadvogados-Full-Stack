const express = require('express');
const teamsController = require('../controllers/teams.controller');

const router = express.Router();

router.get('/', teamsController.getAllTeams)
router.post('/', teamsController.registerTeam)
router.delete('/', teamsController.deleteTeam)

module.exports = router;