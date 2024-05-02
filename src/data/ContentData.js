import ReactIcon from "../assets/ReactIcon.svg";

// TechStack Images:
import FigmaLogo from "../assets/TechStackImages/Figma.png";
import GitHubLogo from "../assets/TechStackImages/GitHubLogo.png";
import LogicProLogo from "../assets/TechStackImages/LogicProLogo .png";
import OutsystemsLogo from "../assets/TechStackImages/Outsystems.png";
import SassLogo from "../assets/TechStackImages/SassLogo.png";
import TailwindLogo from "../assets/TechStackImages/Tailwind.png";
import VSCodeLogo from "../assets/TechStackImages/VSCode.png";

export const selectedWorkContent = [
  {
    id: 1,
    icon: ReactIcon,
    title: "React Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
  },
  {
    id: 2,
    icon: ReactIcon,
    title: "Other Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
  },
  {
    id: 3,
    icon: ReactIcon,
    title: "Tailwind Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
  },
];

export const techStackItems = [
  {
    id: 1,
    title: "Figma",
    image: FigmaLogo,
    tagName: "Design",
  },
  {
    id: 2,
    title: "VSCode",
    image: VSCodeLogo,
    tagName: "Editor",
  },
  {
    id: 3,
    title: "TailwindCSS",
    image: TailwindLogo,
    tagName: "CSS",
  },
  {
    id: 4,
    title: "SASS",
    image: SassLogo,
    tagName: "CSS",
  },
  {
    id: 5,
    title: "Outsystems",
    image: OutsystemsLogo,
    tagName: "Platform",
  },
  {
    id: 6,
    title: "Logic Pro",
    image: LogicProLogo,
    tagName: "Music",
  },
  {
    id: 7,
    title: "GitHub",
    image: GitHubLogo,
    tagName: "Version Control",
  },
];

export const headerLinks = [
  {
    id: 0,
    name: "About",
    link: "/About",
  },
  {
    id: 1,
    name: "Work",
    link: "/Work",
  },
  // {
  //   id: 2,
  //   name: "Notebook",
  //   link: "/Notebook",
  // },
  {
    id: 3,
    name: "Contact",
    link: "/Contact",
  },
  {
    id: 4,
    name: "More",
    dropdown: [
      {
        id: 0,
        dropdownName: "Bookshelf",
        link: "/Bookshelf",
      },
      {
        id: 1,
        dropdownName: "Tech Stack",
        link: "/TechStack",
      },
    ],
  },
];
