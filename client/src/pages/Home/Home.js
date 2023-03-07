import * as S from './styles';

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <S.MainContainer>
        <h1>HOME</h1>
      </S.MainContainer>
      <Footer />
    </div>
  );
}

export default Home;
