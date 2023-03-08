const connection = require('./connection');

const getAllTeams = async () => {
  const query = `select * from time`;
  const { rows } = await connection.query(query);
  return rows
};

const registerTeam = async ({name}) => {
  const query1 = `
  SELECT nome
  FROM TIME
  WHERE nome = '${name}'
  `;
  const result1 = await connection.query(query1);
  if (result1.rows[0]) return 'Existing team'

  const query2 = `insert into time(nome) values ('${name}')`;
  await connection.query(query2);
  return 'Team added successfully'
};

const deleteTeam = async ({id}) => {
  const query1 = `DELETE FROM time WHERE id = ${id};`;
  await connection.query(query1);
  return 'Successfully deleted'
};

module.exports = {
  getAllTeams,
  registerTeam,
  deleteTeam,
};