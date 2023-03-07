const { teamsModel } = require('../models');

const getAllTeams = () => {
	const response = teamsModel.getAllTeams()
	return response
}

module.exports = {
	getAllTeams,
}