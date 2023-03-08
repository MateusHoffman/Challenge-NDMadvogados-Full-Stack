import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: calc(724px * 0.84);
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #adb5bd;

  > div {
    display: grid;
    width: 100%;
    place-items: center;
    row-gap: 0.5rem;
    font-size: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > a {
    text-decoration: inherit;
    text-decoration-thickness: 4px;
    text-underline-offset: 2px;
    display: grid;
    height: 2.5rem;
    width: 2.5rem;
    place-items: center;
    border-radius: 0.375rem;

    > img {
      display: block;
      height: 2.35rem;
      width: 2.35rem;


      padding: 0 0.5rem 0 0.5rem;
      cursor: pointer;
      border-radius: 0.375rem;

      &:hover {
        background-color: #495057;
      }
    }
  }
`;
