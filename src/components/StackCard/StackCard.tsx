import React from "react";
import { useState } from "react";
import { useRepoContext } from "../../context/RepoContext";
import { Hr } from "../../styles/common";
import { RepoData } from "../../types";

import { numberWithCommas } from "../../utils";
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
  CompareToggle,
} from "./styles";

interface Props {
  repo: RepoData;
  index: number;
  benchmark: RepoData;
}

const StackCard = ({ repo, index, benchmark }: Props) => {
  const [hover, setHover] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  let {
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
  let issuesClosed = totalIssues === 0 ? 0 : totalIssues - openIssues;
  let percentageOpened = Number(((openIssues * 100) / totalIssues).toFixed(2));
  let {
    totalIssues: totalIssuesBM,
    openIssues: openIssuesBM,
    watch: watchBM,
    stars: starsBM,
    forks: forksBM,
    lastMonthDownloads: lastMonthDownloadsBM,
    createdAt: createdAtBM,
    lastUpdate: lastUpdateBM,
    score: scoreBM,
  } = benchmark;
  let percentageOpenedBM = Number(
    ((openIssuesBM * 100) / totalIssuesBM).toFixed(2)
  );
  let issuesClosedBM = totalIssuesBM === 0 ? 0 : totalIssuesBM - openIssuesBM;

  if (index !== 0 && hover === false) {
    totalIssues = totalIssues - totalIssuesBM;
    openIssues = openIssues - openIssuesBM;
    watch = watch - watchBM;
    stars = stars - starsBM;
    forks = forks - forksBM;
    issuesClosed = issuesClosed - issuesClosedBM;
    if (lastMonthDownloads && lastMonthDownloadsBM) {
      lastMonthDownloads = lastMonthDownloads - lastMonthDownloadsBM;
    }
    percentageOpened = Number(
      (percentageOpened - percentageOpenedBM).toFixed(2)
    );
    // if it is benchmark item
  } else {
    createdAtBM = "";
    lastUpdateBM = "";
  }

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
        neutral={hover || index === 0}
        icon="downloads"
        iconColor={hover ? "Forestgreen" : "inherit"}
      />
      <CenterDivFlex>
        <DateIcon
          date={createdAt}
          benchmarkDate={createdAtBM}
          icon="hourglass"
          highlight={hover}
        />
        <DateIcon
          date={lastUpdate}
          icon="cycle"
          highlight={hover}
          benchmarkDate={lastUpdateBM}
        />
      </CenterDivFlex>
      <CenterDivFlex>
        <StatsIcon
          neutral={hover || index === 0}
          number={issuesClosed}
          icon="issuesClosed"
          iconColor={hover ? "green" : "inherit"}
        />
        <StatsIcon
          neutral={hover || index === 0}
          number={openIssues}
          icon="openIssues"
          iconColor={hover ? "firebrick" : "inherit"}
          oppositeRule={true}
        />
        <StatsIcon
          neutral={hover || index === 0}
          number={percentageOpened}
          icon="percent"
          uom="%"
          iconColor={hover ? "cadetblue" : "inherit"}
          oppositeRule={true}
        />
      </CenterDivFlex>
      <CenterDivFlex>
        <StatsIcon
          neutral={hover || index === 0}
          number={watch}
          icon="watch"
          iconColor={hover ? "Darkblue" : "inherit"}
        />
        <StatsIcon
          neutral={hover || index === 0}
          number={stars}
          icon="stars"
          iconColor={hover ? "goldenrod" : "inherit"}
        />
        <StatsIcon
          neutral={hover || index === 0}
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
      {/* // Appear only on non'benchmark item */}
      {index === 0 || (
        <>
          <PinButton
            appear={hover}
            onClick={() => dispatchRepo({ type: "SET_AS_MAIN", data: index })}
          />
          <CompareToggle
            appear={hover}
            onClick={() => setCompareMode(!compareMode)}
          />
        </>
      )}
    </Card>
  );
};

export default React.memo(StackCard);
