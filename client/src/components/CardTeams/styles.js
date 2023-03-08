import styled from 'styled-components';

export const Container = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  grid-template-columns: auto;
  background-color: #212529;
  width: calc(100% * 0.84);

  @media (min-width: 768px) {
    width: calc(50% * 0.84);
  }

  &:hover {
    background-color: #292e33;
    > div > p {
    border-bottom: 1px solid #212529;
  }
  }

  > h3 {
    text-align: center;
    padding-bottom: 0.5rem;
  }

  > div > p {
    text-align: center;
    border-bottom: 1px solid #292e33;
    padding: 0.35rem 0;
  }
`;

export const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  border-bottom: 1px solid #495057;

  > div {
    display: flex;
    gap: 0.5rem;
    > button {
      padding: 0.2rem 0.5rem;
      border: none;
      cursor: pointer;
      border-radius: 0.375rem;
      background-color: #16191d;

      &:hover {
        background-color: #495057;
      }
    }
  }
`;
