import * as S from './styles';
import { useNavigate } from 'react-router-dom';

import api from '../../service/requests';
import { globalContext } from '../../contexts/globalContext'
import { useContext } from 'react';

function CardTeams({ info: { team, teamPlayers } }) {
  const navigate = useNavigate();
  const { setPlayerInfo, setEditingPlayer } = useContext(globalContext)

  const handleDeletePlayer = async ({id, name}) => {
    await api.delete.deletePlayer({id})
    window.location.reload(false);
  }

  const handleDeleteTeam = async (id) => {
    await api.delete.deleteTeam({id})
    window.location.reload(false);
  }

  const handleEditPlayer = ({ name, id, age }) => {
    setPlayerInfo({id, name, team, age})
    setEditingPlayer(true)
    navigate('/register/players');
    // console.log(name, id);
    // await api.put.editPlayer(id, {name, age, team})
    // console.log(id);
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
                <button onClick={() => handleEditPlayer(teamPlayers[i])}>🖌</button>
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
