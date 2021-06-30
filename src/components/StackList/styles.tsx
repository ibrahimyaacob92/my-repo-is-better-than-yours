import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  padding-bottom: 10px;
  /* //TODO: Make this responsive ! */
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    /* max-width: 1080px; */
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
