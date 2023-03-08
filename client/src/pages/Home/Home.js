import * as S from './styles';
import { useContext, useEffect, useState } from 'react';

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import CardTeams from '../../components/CardTeams/CardTeams';
// import api from '../../service/requests';
import { globalContext } from '../../contexts/globalContext'

function Home() {
  const { teamsPlayers } = useContext(globalContext)
  const [organizedTeams, setOrganizedTeams] = useState([])

  const organizingTeams = () => {
    const organized = []
    if (teamsPlayers) {
      teamsPlayers.forEach(e => {
        const result = teamsPlayers.filter(f => f.nome_do_time === e.nome_do_time)
        const exists = organized.some(s => s[0].nome_do_time === result[0].nome_do_time)
        if (!exists) organized.push(result)
      })
    }
    setOrganizedTeams(organized)
  }

  useEffect(() => {
    organizingTeams()
  }, [teamsPlayers])

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.TitlePage>TEAMS</S.TitlePage>
        <S.SectionTeams>
          {
            organizedTeams
              .map((e, i) => (<CardTeams key={i} arrPlayers={e} />)
            )
          }
        </S.SectionTeams>
      </S.MainContainer>
      <Footer />
    </>
  );
}

export default Home;
