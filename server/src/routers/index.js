const express = require('express');

const playersRouter = require('./players.router');
const teamsRouter = require('./teams.router');

const router = express.Router();

router.use('/api/teams', teamsRouter);
router.use('/api/players', playersRouter);

module.exports = router;