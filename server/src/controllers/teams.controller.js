const { teamsService } = require('../services');

const getAllTeams = async (req, res, next) => {
	try {
		const response = await teamsService.getAllTeams()
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

const getAllTeamsWithPlayers = async (req, res, next) => {
	try {
		const response = await teamsService.getAllTeamsWithPlayers()
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

const registerTeam = async (req, res, next) => {
	try {
		const response = await teamsService.registerTeam(req.body)
		res.status(201).json(response)
	} catch (error) {
		next(error)
	}
}

const deleteTeam = async (req, res, next) => {
	try {
		const response = await teamsService.deleteTeam(req.params)
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

module.exports = {
  getAllTeams,
  registerTeam,
  deleteTeam,
  getAllTeamsWithPlayers,
};