const express = require('express');
const cors = require('cors')

const { playersRouter, teamsRouter } = require('./routers');
const routers = require('./routers');

const app = express();

app.use(express.json());
app.use(cors())

app.use(routers);

app.use((err, req, res, next) => {
	res.status(err.status || 500).json({ message: err.message });
})

module.exports = app;