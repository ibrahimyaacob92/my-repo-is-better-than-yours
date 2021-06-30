import {
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineFork,
  AiOutlineDownload,
  AiOutlinePieChart,
} from "react-icons/ai";
import { VscIssues, VscIssueClosed } from "react-icons/vsc";
import { CenterDiv, SpanPlusMinus } from "../../styles/common";

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
  oppositeRule?: boolean;
  neutral: boolean;
}

const StatsIcon = ({
  number,
  icon,
  additionalText,
  uom,
  iconColor,
  neutral,
  oppositeRule = false,
}: Props) => {
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
      <SpanPlusMinus
        colorOption={
          neutral
            ? "neutral"
            : number && isFinite(number)
            ? number > 0
              ? oppositeRule
                ? "minus"
                : "plus"
              : oppositeRule
              ? "plus"
              : "minus"
            : "neutral"
        }
      >
        {number && isFinite(number) ? number : "??"}
        {uom}
      </SpanPlusMinus>
      <span>{additionalText}</span>
    </CenterDiv>
  );
};

export default StatsIcon;
