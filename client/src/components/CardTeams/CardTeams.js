import * as S from './styles';

import api from '../../service/requests';

function CardTeams({ info: { team, teamPlayers } }) {

  const handleDeletePlayer = async ({id, name}) => {
    await api.delete.deletePlayer({id})
    window.location.reload(false);
  }

  const handleDeleteTeam = async (id) => {
    await api.delete.deleteTeam({id})
    window.location.reload(false);
  }

  const handleEdit = async ({id}) => {
    // await api.delete.deletePlayer({player})
    console.log(id);
  }

  return (
    <S.Container>
      <h3>{team.name}</h3>
      <div>
        {
          [1,2,3,4,5].map((e, i) => (
            <S.Player Key={i}>
              <div>
                <p>{teamPlayers[i] ? teamPlayers[i].name : '-'}</p>
              </div>
              <div>
                <button onClick={() => handleDeletePlayer(teamPlayers[i])}>🗑</button>
                <button onClick={() => handleEdit(teamPlayers[i])}>🖌</button>
              </div>
            </S.Player>
          ))
        }
      </div>
      <S.DeleteTeam onClick={() => handleDeleteTeam(team.id)}>🗑</S.DeleteTeam>
    </S.Container>
  );
}

export default CardTeams;
