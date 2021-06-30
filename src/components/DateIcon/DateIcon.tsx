import React from "react";
import { dateDiff } from "../../utils";
import { AiOutlineHourglass } from "react-icons/ai";
import { IoIosHourglass, IoMdStopwatch, IoMdRefresh } from "react-icons/io";
import { Container } from "./styles";
import { SpanPlusMinus } from "../../styles/common";

interface Props {
  date: string;
  benchmarkDate?: string;
  icon: "hourglass" | "stopwatch" | "cycle";
  highlight: boolean;
}

const DateIcon = ({ date, benchmarkDate, icon, highlight }: Props) => {
  const Icon = {
    hourglass: AiOutlineHourglass,
    stopwatch: IoMdStopwatch,
    cycle: IoMdRefresh,
  }[icon];

  const { yearDiff, monthDiff, dayDiff, isOlder } = dateDiff(
    date,
    benchmarkDate
  );

  return (
    <Container>
      <Icon
        color={highlight ? "goldenrod" : ""}
        style={{ transition: "0.5s" }}
      />
      <SpanPlusMinus
        colorOption={
          highlight || benchmarkDate === ""
            ? "neutral"
            : isOlder
            ? "plus"
            : "minus"
        }
      >
        {isOlder ? "+" : "-"}
        {yearDiff}·{monthDiff}·{dayDiff}
      </SpanPlusMinus>
    </Container>
  );
};

export default DateIcon;
