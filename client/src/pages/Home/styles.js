import styled from 'styled-components';

export const MainContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 79vh;
`;

export const TitlePage = styled.h1`
  padding-top: 2rem;
  font-size: 55px;
  color: #73de08;
`;

export const SectionTeams = styled.section`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: calc(100% * 0.84);
`;