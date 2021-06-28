import styled from "styled-components";
import { ClickableP } from "../../styles/common";

export const ScrollableDiv = styled.div`
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const RepoItem = styled(ClickableP)`
  transition: 0.5s;
  padding: 2px 0;
  width: max-content;
  :hover {
    transform: translate(10px);
  }
`;
