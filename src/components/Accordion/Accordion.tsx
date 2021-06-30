import React, { useState } from "react";
import { ClickableH3, SpacedBetweenDiv } from "../../styles/common";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  children: JSX.Element | string;
  title: string;
  defaultOpen: boolean;
  Icon?: React.ElementType;
}

const Accordion = ({ title, children, defaultOpen, Icon }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <AccordionTitle onClick={() => setOpen(!open)}>
        <ClickableH3>
          {Icon && <Icon />}
          <span>{title}</span>
        </ClickableH3>

        {open ? <BsChevronUp /> : <BsChevronDown />}
      </AccordionTitle>
      {open && (
        <div
          style={{ paddingTop: "5px", paddingLeft: "28px", fontSize: "14px" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;

const AccordionTitle = styled(SpacedBetweenDiv)`
  :hover {
    color: purple;
    cursor: pointer;
  }
`;
