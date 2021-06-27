import React from "react";
import { dateDiff } from "../../utils";
import { AiOutlineHourglass } from "react-icons/ai";
import { IoIosHourglass, IoMdStopwatch, IoMdRefresh } from "react-icons/io";
import { Container } from "./styles";

interface Props {
  date: string;
  displayAs?: "YMD" | "MD" | "D";
  icon: "hourglass" | "stopwatch" | "cycle";
  highlight: boolean;
}

const DateIcon = ({ date, displayAs, icon, highlight }: Props) => {
  const Icon = {
    hourglass: AiOutlineHourglass,
    stopwatch: IoMdStopwatch,
    cycle: IoMdRefresh,
  }[icon];

  const { yearDiff, monthDiff, dayDiff } = dateDiff(date);
  return (
    <Container>
      <Icon
        color={highlight ? "goldenrod" : ""}
        style={{ transition: "0.5s" }}
      />
      <span>
        {yearDiff}·{monthDiff}·{dayDiff}
      </span>
    </Container>
  );
};

export default DateIcon;
