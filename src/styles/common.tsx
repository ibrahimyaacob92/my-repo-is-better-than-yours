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
  border: 1px solid gray;
  background-color: rgba(0, 128, 0, 0.1);
  border-radius: 10px;
  padding: 5px 5px;
  transition: 0.5s;
  :hover {
    border: 1px rgba(0, 128, 0, 0.5) solid;
    background-color: forestgreen;
    color: white;
    cursor: pointer;
  }
  :disabled {
    background-color: transparent;
    border: 1px solid gray;
    color: gray;
  }
  :focus {
    outline: none;
    background-color: forestgreen;
    color: white;
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

export const ClickableP = styled.p`
  :hover {
    color: purple;
    cursor: pointer;
  }
`;

export const ClickableH3 = styled.h3`
  :hover {
    color: purple;
    cursor: pointer;
  }
`;
