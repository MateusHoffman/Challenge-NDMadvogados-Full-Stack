const connection = require('./connection');

const getAllTeams = async () => {
  const query = `select * from time`;
  const { rows } = await connection.query(query);
  return rows
};

module.exports = {
  getAllTeams,
};