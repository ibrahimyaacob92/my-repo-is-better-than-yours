import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  align-self: start;
  top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  height: inherit;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const AppTitle = styled.h1`
  margin: 10px 0;
  font-family: "Lobster Two", cursive;
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
`;
