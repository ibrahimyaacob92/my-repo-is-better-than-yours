import React from "react";
import { useState } from "react";
import { useRepoContext } from "../../context/RepoContext";
import { Button, SpacedBetweenDiv, Hr } from "../../styles/common";
import { RepoData } from "../../types";

import { dateDiff, numberWithCommas } from "../../utils";
import DateIcon from "../DateIcon/DateIcon";
import PLIcons from "../PLIcons/PLIcons";
import StatsIcon from "../StatsIcon/StatsIcon";
import {
  Card,
  RepoLogo,
  Title,
  CloseButton,
  SubtitleTypeA,
  CenterDivFlex,
  PinButton,
} from "./styles";

interface Props {
  repo: RepoData;
  index: number;
  benchmark?: RepoData;
}

const StackCard = ({ repo, index }: Props) => {
  const [hover, setHover] = useState(false);
  const {
    totalIssues,
    openIssues,
    watch,
    stars,
    language,
    owner,
    name,
    forks,
    lastMonthDownloads,
    createdAt,
    lastUpdate,
    avatar,
    url,
    score,
  } = repo;
  const issuesClosed = totalIssues === 0 ? 0 : totalIssues - openIssues;
  const percentageOpened = Number(
    ((openIssues * 100) / totalIssues).toFixed(2)
  );
  const { dispatchRepo } = useRepoContext();
  return (
    <Card
      key={name + owner}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CenterDivFlex>
        <a href={url}>
          <RepoLogo src={avatar} alt={name} />
          <Title>{name} </Title>
        </a>
      </CenterDivFlex>
      <SubtitleTypeA>by {owner}</SubtitleTypeA>
      <StatsIcon
        number={lastMonthDownloads}
        icon="downloads"
        iconColor={hover ? "Forestgreen" : "inherit"}
      />
      <CenterDivFlex>
        <DateIcon date={createdAt} icon="hourglass" highlight={hover} />
        <DateIcon date={lastUpdate} icon="cycle" highlight={hover} />
      </CenterDivFlex>
      <CenterDivFlex>
        <StatsIcon
          number={issuesClosed}
          icon="issuesClosed"
          iconColor={hover ? "green" : "inherit"}
        />
        <StatsIcon
          number={openIssues}
          icon="openIssues"
          iconColor={hover ? "firebrick" : "inherit"}
        />
        <StatsIcon
          number={percentageOpened}
          icon="percent"
          uom="%"
          iconColor={hover ? "cadetblue" : "inherit"}
        />
      </CenterDivFlex>
      <CenterDivFlex>
        <StatsIcon
          number={watch}
          icon="watch"
          iconColor={hover ? "Darkblue" : "inherit"}
        />
        <StatsIcon
          number={stars}
          icon="stars"
          iconColor={hover ? "goldenrod" : "inherit"}
        />
        <StatsIcon
          number={forks}
          icon="forks"
          iconColor={hover ? "MediumVioletRed" : "inherit"}
        />
      </CenterDivFlex>
      <Hr />
      <Title>{numberWithCommas(score as number)}</Title>
      <PLIcons language={language} />
      <CloseButton
        appear={hover}
        onClick={() => dispatchRepo({ type: "REMOVE", data: index })}
      />
      {index === 0 || (
        <PinButton
          appear={hover}
          onClick={() => dispatchRepo({ type: "SET_AS_MAIN", data: index })}
        />
      )}
    </Card>
  );
};

export default StackCard;
