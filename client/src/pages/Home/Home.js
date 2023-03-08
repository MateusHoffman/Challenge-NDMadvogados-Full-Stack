import * as S from './styles';

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import CardTeams from '../../components/CardTeams/CardTeams';
import api from '../../service/requests';
import { useEffect, useState } from 'react';

function Home() {
  const [completeTeams, setCompleteTeams] = useState([])

  const organizedTeams = (teams, players) => {
    const arrOrganizedTeams = []
    teams.forEach(t => {
      const teamPlayers = []
      players.forEach(p => {
        if (p.time_id === t.id) {
          teamPlayers.push({ name: p.nome, id: p.id })
        }
      })
      arrOrganizedTeams.push({team: t.nome, teamPlayers})
    })
    setCompleteTeams(arrOrganizedTeams)
    return arrOrganizedTeams
  }

  const requestApi = async () => {
    const teams = await api.get.getAllTeams()
    const players = await api.get.getAllPlayers()
    organizedTeams(teams, players)
  }

  useEffect(() => {
    requestApi()
  }, [])

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.TitlePage>TEAMS</S.TitlePage>
        <S.SectionTeams>
          {
            completeTeams.map((e, i) => (
              <CardTeams key={i} info={e} />
            ))
          }
        </S.SectionTeams>
      </S.MainContainer>
      <Footer />
    </>
  );
}

export default Home;
