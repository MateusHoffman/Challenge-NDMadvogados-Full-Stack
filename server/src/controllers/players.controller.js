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
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

module.exports = {
  getAllPlayers,
	registerPlayer,
};