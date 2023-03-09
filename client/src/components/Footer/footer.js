import * as S from './styles';

import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import instagram from '../../assets/images/instagram.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <S.FooterContainer>
      <div>
        <S.SocialMedia>
          <Link to="https://www.linkedin.com/in/mateushoffman/" target="_blank">
            <img src={linkedin} alt='LinkedIn' />
          </Link>
          <Link to="https://github.com/MateusHoffman" target="_blank">
            <img src={github} alt='GitHub' />
          </Link>
          <Link to="https://www.instagram.com/maahoffman/" target="_blank">
            <img src={instagram} alt='Instagram' />
          </Link>
        </S.SocialMedia>
        <div>
          Hoffman © <span>2023</span>
        </div>
      </div>
    </S.FooterContainer>
  );
}

export default Footer;
