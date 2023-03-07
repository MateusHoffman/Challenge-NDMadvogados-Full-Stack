import { Link } from "react-router-dom";

import * as S from './styles';
import logoPhoenix from '../../assets/images/logo-phoenix.png';

function Header() {
  return (
    <S.Container>
      <S.DivLogo>
        <img src={logoPhoenix} alt='Logo' />
      </S.DivLogo>
      <S.Nav>
        <Link to="/">Home</Link>
        <Link to="/register/teams">Register Teams</Link>
        <Link to="/register/players">Register Players</Link>
      </S.Nav>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register/teams">Register Teams</Link>
          </li>
          <li>
            <Link to="/register/players">Register Players</Link>
          </li>
        </ul>
      </nav> */}
    </S.Container>
  );
}

export default Header;
