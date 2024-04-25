import { headerLinks } from "../data/ContentData";
import MenuItems from "./UI/MenuItems";

const Navbar = ({ headerOnTop }) => {
  return (
    <nav>
      <ul className="flex h-full items-center gap-6">
        {headerLinks.map((menu, index) => {
          return (
            <MenuItems items={menu} key={index} headerOnTop={headerOnTop} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
