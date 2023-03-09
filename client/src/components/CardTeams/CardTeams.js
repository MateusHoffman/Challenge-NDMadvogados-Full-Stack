import * as S from './styles';
import { useNavigate } from 'react-router-dom';

import api from '../../service/requests';
import { globalContext } from '../../contexts/globalContext'
import { useContext } from 'react';

function CardTeams({ arrPlayers }) {
  const navigate = useNavigate();
  const { teamsPlayers, setTeamsPlayers, setPlayerInfo, setEditingPlayer } = useContext(globalContext)

  const handleDeletePlayer = async ({ id }) => {
    const newTeamsPlayers = teamsPlayers.filter(f => f.id !== id)
    await api.delete.deletePlayer({id})
    setTeamsPlayers(newTeamsPlayers)
  }

  const handleDeleteTeam = async (id) => {
    const newTeamsPlayers = teamsPlayers.filter(f => f.time_id !== id)
    await api.delete.deleteTeam({id})
    setTeamsPlayers(newTeamsPlayers)
  }

  const handleEditPlayer = ({ id, nome, idade, time_id }) => {
    setPlayerInfo({id, nome, idade, time_id})
    setEditingPlayer(true)
    navigate('/register/players');
  }

  return (
    <S.Container>
      <h3>{arrPlayers[0].nome_do_time}</h3>
      <div>
        {
          [1,2,3,4,5].map((e, i) => (
            <S.Player Key={`${arrPlayers[0].nome_do_time} - ${i}`}>
              <div>
                <p>{arrPlayers[i] ? arrPlayers[i].nome : '-'}</p>
              </div>
              <div>
                <button onClick={() => handleDeletePlayer(arrPlayers[i])}>🗑</button>
                <button onClick={() => handleEditPlayer(arrPlayers[i])}>🖌</button>
              </div>
            </S.Player>
          ))
        }
      </div>
      <S.DeleteTeam onClick={() => handleDeleteTeam(arrPlayers[0].time_id)}>🗑</S.DeleteTeam>
    </S.Container>
  );
}

export default CardTeams;
