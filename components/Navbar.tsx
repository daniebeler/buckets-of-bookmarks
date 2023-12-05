import { useState } from "react";
import Overlay from "./Overlay";
import { List, X } from "phosphor-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <div
      className={"block md:hidden fixed w-full z-10 " + (toggle ? "h-screen" : "")}
    >
      <div className="h-[45px] row flex justify-center bg-gray-700 items-center px-4">
        <div className="basis-full">
          <h4 className="text-center m-0 p-0 text-white">
            Buckets of Bookmarks
          </h4>
        </div>
        <div className="basis-0">
          <List
            size="24"
            color="white"
            className={"hover:cursor-pointer " + (toggle ? "hidden" : "block")}
            onClick={toggleMenu}
          />

          <X
            size="24"
            color="white"
            className={"hover:cursor-pointer " + (toggle ? "block" : "hidden")}
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
