import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import api from '../../service/requests';
import { globalContext } from '../../contexts/globalContext'

function RegisterPlayers() {
  const navigate = useNavigate();
  const { playerInfo, editingPlayer } = useContext(globalContext)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [team, setTeam] = useState('1')
  const [allTeams, setAllTeams] = useState([])

  const handleChange = ({target: {name, value}}) => {
    if (name === 'name') setName(value)
    if (name === 'age') setAge(value)
    if (name === 'team') setTeam(value)
  }

  const handleSubmit = async() => {
    if (editingPlayer) {
      await api.put.editPlayer(playerInfo.id, {name, age, team})
    } else {
      await api.post.registerPlayer({name, age, team})
    }
    setName('')
    setAge('')
    navigate('/');
  }

  const requestApi = async () => {
    const teams = await api.get.getAllTeams()
    setAllTeams(teams)
  }

  useEffect(() => {
    requestApi()
    if (playerInfo) {
      setName(playerInfo.name)
      setAge(playerInfo.age)
      setTeam(playerInfo.team)
    }
  }, [playerInfo])

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.TitlePage>Register Players</S.TitlePage>
        <S.FormRegister onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input type="text" name='name' value={name} onChange={(e) => handleChange(e)} />
          </label>
          <label>
            Age:
            <input type="text" name='age' value={age} onChange={(e) => handleChange(e)} />
          </label>
          <label className='label_select'>
            Team:
            <select name='team' onChange={(e) => handleChange(e)}>
              {
                allTeams.map((e, i) => (
                  <option key={i} value={e.id}>{e.nome}</option>
                ))
              }
            </select>
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </S.FormRegister>
      </S.MainContainer>
      <Footer />
    </>
  );
}

export default RegisterPlayers;
