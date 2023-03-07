import styled from 'styled-components';

export const Container = styled.header`
  backdrop-filter: blur(8px);
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  background-color: hsl(var(214 14% 10%) / 65%);
  padding: 0.5rem;
`;

export const DivLogo = styled.div`
  text-decoration: inherit;
  text-decoration-thickness: 4px;
  text-underline-offset: 2px;
  display: grid;
  height: 2.75rem;
  width: 2.75rem;
  place-items: center;
  border-radius: 0.375rem;
  color: #f1f3f5;
  cursor: pointer;

  &:hover {
    background-color: #495057;
  }

  > img {
    display: block;
    width: 2.25rem;
  }
`;

export const Nav = styled.nav`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0 1rem 0 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 0.375rem;
    height: 2.75rem;
    text-decoration: none;
    color: #fff;
    font-size: 16px;

    &:hover {
      background-color: #495057;
    }
  }
`;
