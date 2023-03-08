const { teamsModel } = require('../models');

const getAllTeams = () => {
	const response = teamsModel.getAllTeams()
	return response
}

const registerTeam = (body) => {
	const response = teamsModel.registerTeam(body)
	return response
}

const deleteTeam = (body) => {
	const response = teamsModel.deleteTeam(body)
	return response
}

module.exports = {
	getAllTeams,
	registerTeam,
	deleteTeam,
}