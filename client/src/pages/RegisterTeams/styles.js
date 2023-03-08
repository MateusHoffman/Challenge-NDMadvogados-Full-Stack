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
  font-size: 45px;
  color: #73de08;
`;

export const FormRegister = styled.form`
  padding-top: 2rem;
  width: calc(100% * 0.84);

  > label > input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  > input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: calc(35% * 1);
  }
`;