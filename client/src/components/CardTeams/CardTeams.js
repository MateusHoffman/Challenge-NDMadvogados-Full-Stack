import * as S from './styles';

function CardTeams({ info: { team, teamPlayers } }) {
  return (
    <S.Container>
      <h3>{team}</h3>
      <div>
        {
          [1,2,3,4,5].map((e, i) => (
            <p key={i}>{teamPlayers[i] ? teamPlayers[i] : '-'}</p>
          ))
        }
      </div>
    </S.Container>
  );
}

export default CardTeams;
