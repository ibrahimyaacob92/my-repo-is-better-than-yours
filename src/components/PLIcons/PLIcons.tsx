import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiTypescript, SiPhp, SiCplusplus } from "react-icons/si";
import { AbsoluteDiv } from "../../styles/common";

interface Props {
  language: string;
}

const PLIcons = ({ language }: Props) => {
  const Icon = {
    JavaScript: <IoLogoJavascript fontSize="22px" color="rgba(0, 0, 0, 0.3)" />,
    Python: <IoLogoPython fontSize="22px" color="rgba(0, 0, 0, 0.3)" />,
    PHP: <SiPhp fontSize="22px" color="rgba(0, 0, 0, 0.3)" />,
    TypeScript: <SiTypescript fontSize="19px" color="rgba(0, 0, 0, 0.3)" />,
    "C++": <SiCplusplus fontSize="19px" color="rgba(0, 0, 0, 0.3)" />,
  }[language];

  return <AbsoluteDiv> {Icon ? Icon : language}</AbsoluteDiv>;

  // if (Icon) {
  //   return <AbsoluteDiv>{Icon}</AbsoluteDiv>;
  // } else return <AbsoluteDiv>{language}</AbsoluteDiv>;
};

export default PLIcons;
