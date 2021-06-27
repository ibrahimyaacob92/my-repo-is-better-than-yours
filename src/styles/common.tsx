import styled from "styled-components";

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`;

export const SpacedBetweenDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

type AbsoluteDivType = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};
export const AbsoluteDiv = styled.div<AbsoluteDivType>`
  position: absolute;
  left: ${(p) => p.left || "inherit"};
  right: ${(p) => p.right || "inherit"};
  top: ${(p) => p.top || "inherit"};
  bottom: ${(p) => p.bottom || "inherit"};
`;

export const Button = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 10px;
  padding: 5px 5px;
  transition: 0.5s;
  :hover {
    border: 1px rgba(0, 128, 0, 0.5) solid;
    color: green;
    background-color: rgba(0, 128, 0, 0.1);
    cursor: pointer;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border-color: rgb(170, 170, 170);
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 4px;
`;
