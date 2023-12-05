import { useState } from "react";
import Overlay from "./Overlay";
import { List } from "phosphor-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <div className="d-block d-sm-none flex flex-col fixed w-full">
      <div className="h-[45px] row d-flex align-items-center">
        <div className="col">
          <h4 className="text-center m-0 p-0">Buckets of Bookmarks</h4>
        </div>
        <div className="col-auto">
          <List
            size="24"
            color="#111"
            className="hover:cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div className={toggle ? "block" : "hidden"}>
        <Overlay toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
