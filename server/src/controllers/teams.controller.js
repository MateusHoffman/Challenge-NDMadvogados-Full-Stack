const { teamsService } = require('../services');

const getAllTeams = async (req, res, next) => {
	try {
		const response = await teamsService.getAllTeams()
		res.status(200).json(response)
	} catch (error) {
		next(error)
	}
}

module.exports = {
  getAllTeams,
};