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
  font-size: 14px;
  width: max-content;
  :hover {
    transform: translate(10px);
  }
`;

export const ContactsIcon = styled.div`
  display: flex;
  font-size: 26px;
  column-gap: 4px;
  color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  svg {
    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;
