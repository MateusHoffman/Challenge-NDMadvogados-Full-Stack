import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import api from '../../service/requests';

function RegisterTeams() {
  const navigate = useNavigate();

  const [name, setName] = useState('')

  const handleChange = ({target: {name, value}}) => {
    if (name === 'name') setName(value)
  }

  const handleSubmit = async() => {
    await api.post.registerTeam({name})
    setName('')
    navigate('/');
  }

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.TitlePage>Register Teams</S.TitlePage>
        <S.FormRegister onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input type="text" name='name' value={name} onChange={(e) => handleChange(e)} />
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </S.FormRegister>
      </S.MainContainer>
      <Footer />
    </>
  );
}

export default RegisterTeams;
