import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  padding-bottom: 10px;
  /* //TODO: Make this responsive ! */
  grid-template-columns: 1fr;
  min-width: 274px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    min-width: 555px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    min-width: 837px;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    min-width: 1140px;
  }

  @media (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    min-width: 1400;
  }
`;
