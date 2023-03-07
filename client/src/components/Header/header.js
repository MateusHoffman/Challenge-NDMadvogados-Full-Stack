import * as S from './styles';

import { Link } from "react-router-dom";

function Header() {
  return (
    <S.Container>
      <nav>
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
      </nav>
    </S.Container>
  );
}

export default Header;
