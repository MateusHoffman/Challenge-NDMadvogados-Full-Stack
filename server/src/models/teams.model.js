const connection = require('./connection');

const getAllTeams = async () => {
  const query = `select * from time`;
  const { rows } = await connection.query(query);
  return rows
};

const registerTeam = async ({name}) => {
  const query1 = `SELECT nome FROM time`;
  const result1 = await connection.query(query1);
  if (result1.rows.some(e => e.nome === name)) return

  const query2 = `insert into time(nome) values ('${name}')`;
  await connection.query(query2);
  return 'Team added successfully'
};

module.exports = {
  getAllTeams,
  registerTeam,
};