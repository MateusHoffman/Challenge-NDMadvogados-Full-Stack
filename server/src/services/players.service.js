const { playersModel } = require('../models');

const getAllPlayers = () => {
	const response = playersModel.getAllPlayers()
	return response
}

const registerPlayer = (body) => {
	const response = playersModel.registerPlayer(body)
	return response
}

const deletePlayer = (body) => {
	const response = playersModel.deletePlayer(body)
	return response
}

const editPlayer = (params, body) => {
	const response = playersModel.editPlayer(params, body)
	return response
}

module.exports = {
	getAllPlayers,
	registerPlayer,
	deletePlayer,
	editPlayer,
}