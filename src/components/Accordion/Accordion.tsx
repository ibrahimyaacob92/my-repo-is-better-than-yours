import React, { useState } from "react";
import { ClickableH3, SpacedBetweenDiv } from "../../styles/common";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  children: JSX.Element | string;
  title: string;
  defaultOpen: boolean;
}

const Accordion = ({ title, children, defaultOpen }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <AccordionTitle onClick={() => setOpen(!open)}>
        <ClickableH3>{title}</ClickableH3>
        {open ? <BsChevronUp /> : <BsChevronDown />}
      </AccordionTitle>
      {open && <div style={{ paddingTop: "5px" }}>{children}</div>}
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
