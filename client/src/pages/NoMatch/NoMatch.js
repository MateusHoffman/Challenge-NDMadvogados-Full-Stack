import * as S from './styles';

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

function NoMatch() {
  return (
    <>
      <Header />
      <S.MainContainer>
        <h1>NoMatch</h1>
      </S.MainContainer>
      <Footer />
    </>
  );
}

export default NoMatch;
