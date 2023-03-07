const connection = require('./connection');

const getAllPlayers = async () => {
  const query = `select * from jogador`;
  const { rows } = await connection.query(query);
  return rows
};

module.exports = {
  getAllPlayers,
};