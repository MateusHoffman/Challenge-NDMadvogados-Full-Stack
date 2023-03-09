import { Link } from "react-router-dom";

import * as S from './styles';
import logoPhoenix from '../../assets/images/logo-phoenix.png';

function Header() {
  return (
    <S.Container>
      <S.DivLogo>
        <Link to="/">
          <img src={logoPhoenix} alt='Logo' />
        </Link>
      </S.DivLogo>
      <S.Nav>
        <Link to="/">Home</Link>
        <Link to="/register/teams">Register Teams</Link>
        <Link to="/register/players">Register Players</Link>
      </S.Nav>
    </S.Container>
  );
}

export default Header;
