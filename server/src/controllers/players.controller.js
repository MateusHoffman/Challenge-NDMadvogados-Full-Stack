const { playersService } = require('../services');

const getAllPlayers = async (req, res, next) => {
	try {
		const response = await playersService.getAllPlayers()
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

const registerPlayer = async (req, res, next) => {
	try {
		const response = await playersService.registerPlayer(req.body)
		res.status(201).json(response)
	} catch (error) {
		next(error)
	}
}

const deletePlayer = async (req, res, next) => {
	try {
		const response = await playersService.deletePlayer(req.params)
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

const editPlayer = async (req, res, next) => {
	try {
		const response = await playersService.editPlayer(req.params, req.body)
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

module.exports = {
  getAllPlayers,
	registerPlayer,
	deletePlayer,
	editPlayer,
};