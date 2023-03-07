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
