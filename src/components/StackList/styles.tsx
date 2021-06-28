import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;

  /* //TODO: Make this responsive ! */
  grid-template-columns: 1fr 1fr 1fr;
  width: 836px;
`;
