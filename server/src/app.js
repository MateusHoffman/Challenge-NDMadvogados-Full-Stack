const express = require('express');
const cors = require('cors')

const connection = require('./models/connection.js')
const { playersRouter, teamsRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/teams', teamsRouter);
app.use('/api/players', playersRouter);

app.use((err, req, res, next) => {
	res.status(err.status || 500).json({ message: err.message });
})

module.exports = app;