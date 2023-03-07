const { playersModel } = require('../models');

const getAllPlayers = () => {
	const response = playersModel.getAllPlayers()
	return response
}

module.exports = {
	getAllPlayers,
}