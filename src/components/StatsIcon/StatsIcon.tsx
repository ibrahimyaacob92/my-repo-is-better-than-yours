import {
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineFork,
  AiOutlineDownload,
  AiOutlinePieChart,
} from "react-icons/ai";
import { VscIssues, VscIssueClosed } from "react-icons/vsc";
import { CenterDiv } from "../../styles/common";

interface Props {
  number: number | undefined;
  icon:
    | "watch"
    | "stars"
    | "openIssues"
    | "issuesClosed"
    | "downloads"
    | "forks"
    | "percent";
  additionalText?: string;
  uom?: string;
  iconColor?: string;
}

const StatsIcon = ({ number, icon, additionalText, uom, iconColor }: Props) => {
  const Icon = {
    watch: AiOutlineEye,
    stars: AiOutlineStar,
    forks: AiOutlineFork,
    issuesClosed: VscIssueClosed,
    openIssues: VscIssues,
    downloads: AiOutlineDownload,
    percent: AiOutlinePieChart,
  }[icon];

  return (
    <CenterDiv>
      <Icon color={iconColor as string} style={{ transition: "0.5s" }} />
      <span>
        {number && isFinite(number) ? number : "??"}
        {uom}
      </span>
      <span>{additionalText}</span>
    </CenterDiv>
  );
};

export default StatsIcon;
