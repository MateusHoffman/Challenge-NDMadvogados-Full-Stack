const { playersModel } = require('../models');

const getAllPlayers = () => {
	const response = playersModel.getAllPlayers()
	return response
}

const registerPlayer = (body) => {
	const response = playersModel.registerPlayer(body)
	return response
}

module.exports = {
	getAllPlayers,
	registerPlayer,
}