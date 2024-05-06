import ReactIcon from "../assets/ReactIcon.svg";

// TechStack Images:
import FigmaLogo from "../assets/TechStackImages/Figma.png";
import GitHubLogo from "../assets/TechStackImages/GitHubLogo.png";
import LogicProLogo from "../assets/TechStackImages/LogicProLogo .png";
import OutsystemsLogo from "../assets/TechStackImages/Outsystems.png";
import SassLogo from "../assets/TechStackImages/SassLogo.png";
import TailwindLogo from "../assets/TechStackImages/Tailwind.png";
import VSCodeLogo from "../assets/TechStackImages/VSCode.png";

// Bookshelf cover images
import FourThousandWeeks from "../assets/Books/BookShelf/4000Weeks.jpg";
import Power from "../assets/Books/BookShelf/48RulesOfPower.jpg";
import AtomicHabits from "../assets/Books/BookShelf/AtomicHabits.jpg";
import BillionsAndBillions from "../assets/Books/BookShelf/BillionsAndBillions.jpg";
import Cosmos from "../assets/Books/BookShelf/Cosmos.jpg";
import ElonMusk from "../assets/Books/BookShelf/ElonMusk.jpg";
import lifeTreeZero from "../assets/Books/BookShelf/Life3_0.jpg";
import PsycologyOfMoney from "../assets/Books/BookShelf/PsycologyOfMoney.jpg";
import SecretsMillionaire from "../assets/Books/BookShelf/SecretsMillionaire.jpg";
import ThinkAndGetRich from "../assets/Books/BookShelf/ThinkAndGetRich.jpg";
import CantHurtMe from "../assets/Books/BookShelf/cant-hurt-me.jpg";
import RichDadPoorDad from "../assets/Books/BookShelf/rich-dad-poor-dad.jpg";

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

export const BookShelf = [
  {
    id: 1,
    title: "Can't Hurt Me",
    author: "David Goggins",
    stars: 5,
    coverImage: CantHurtMe,
  },
  {
    id: 2,
    title: "Billions and Billions",
    author: "Carl Sagan",
    stars: 5,
    coverImage: BillionsAndBillions,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    stars: 5,
    coverImage: AtomicHabits,
  },
  {
    id: 4,
    title: "4000 Weeks",
    author: "Oliver Burkeman",
    stars: 3,
    coverImage: FourThousandWeeks,
  },
  {
    id: 5,
    title: "Think and Grow Rich!",
    author: "Napoleon Hill",
    stars: 4,
    coverImage: ThinkAndGetRich,
  },
  {
    id: 6,
    title: "Cosmos",
    author: "Carl Sagan",
    stars: 5,
    coverImage: Cosmos,
  },
  {
    id: 7,
    title: "Life 3.0",
    author: "Max Tegmark",
    stars: 5,
    coverImage: lifeTreeZero,
  },
  {
    id: 8,
    title: "Secrets of the Millionaire Mind",
    author: "T. Harv Eker",
    stars: 5,
    coverImage: SecretsMillionaire,
  },
  {
    id: 9,
    title: "The Psycology of Money",
    author: "Morgan Housel",
    stars: 5,
    coverImage: PsycologyOfMoney,
  },
  {
    id: 10,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    stars: 5,
    coverImage: RichDadPoorDad,
  },
  {
    id: 11,
    title: "Elon Musk",
    author: "Ashlee Vange",
    stars: 5,
    coverImage: ElonMusk,
  },
];
