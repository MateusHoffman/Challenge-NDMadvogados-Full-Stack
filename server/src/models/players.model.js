const connection = require('./connection');
const { getAllTeamsWithPlayers } = require('./teams.model');

const getAllPlayers = async () => {
  const query = `select * from jogador`;
  const { rows } = await connection.query(query);
  return rows
};

const registerPlayer = async ({name, age, team}) => {
  const query1 = `SELECT COUNT(*) FROM jogador WHERE time_id = ${team};`;
  const result1 = await connection.query(query1);
  if (result1.rows[0].count >= 5) return 'This team already has the maximum number of players.'

  const query2 = `
  SELECT nome, idade, time_id
  FROM jogador
  WHERE nome = '${name}'
  `;
  const result2 = await connection.query(query2);
  if (result2.rows[0]) return 'Existing player'

  const query3 = `insert into jogador(nome,idade,time_id) values ('${name}',${age},${team})`;
  await connection.query(query3);
  return getAllTeamsWithPlayers()
};

const deletePlayer = async ({id}) => {
  const query1 = `DELETE FROM jogador WHERE id = ${id};`;
  await connection.query(query1);
  return 'Successfully deleted'
};

const editPlayer = async ({id}, {name, age, team}) => {
  const query1 = `
  UPDATE jogador
  SET nome = '${name}', idade = ${age}, time_id = ${team}
  WHERE id = ${id};`;
  await connection.query(query1);
  return getAllTeamsWithPlayers()
};

module.exports = {
  getAllPlayers,
  registerPlayer,
  deletePlayer,
  editPlayer,
};