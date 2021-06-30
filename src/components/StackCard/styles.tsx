import styled from "styled-components";
import { CenterDiv } from "../../styles/common";
import { AiOutlinePushpin } from "react-icons/ai";
import { ImStatsBars2 } from "react-icons/im";

export const Card = styled.div`
  position: relative;
  border: 1px solid gray;
  width: 250px;
  padding: 10px 10px;
  display: flex;
  text-align: center;
  font-size: 14px;
  flex-direction: column;
  row-gap: 5px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const RepoLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const SubtitleTypeA = styled.p`
  font-size: 13px;
  text-transform: capitalize;
`;

type Appear = {
  appear: boolean;
};

export const CloseButton = styled.button<Appear>`
  position: absolute;
  right: 5px;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 0px;
  border-radius: 15px;
  transition: 0.5s;
  color: ${(props) => (props.appear ? "gray" : "transparent")};
  :hover {
    cursor: pointer;
    color: darkred;
  }
  ::before {
    content: "X";
  }
`;

export const PinButton = styled(AiOutlinePushpin)<Appear>`
  position: absolute;
  right: 30px;
  top: 10px;
  transition: 0.5s;
  color: ${(props) => (props.appear ? "gray" : "transparent")};
  :hover {
    cursor: pointer;
    color: blue;
    opacity: 100%;
  }
`;

export const CompareToggle = styled(ImStatsBars2)<Appear>`
  position: absolute;
  right: 8px;
  top: 33px;
  transition: 0.5s;
  color: ${(props) => (props.appear ? "gray" : "transparent")};
  :hover {
    cursor: pointer;
    color: forestgreen;
    opacity: 100%;
  }
`;

export const FlexSB = styled.div`
  display: flex;
  justify-content: space-between;
`;

type CenterDivFlexProps = {
  columnGap?: string;
};

export const CenterDivFlex = styled(CenterDiv)<CenterDivFlexProps>`
  column-gap: ${(props) => props.columnGap || "10px"};
`;
