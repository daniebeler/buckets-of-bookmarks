import { useState } from "react";
import Links from "./Links";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <div className="navbar-wrapper d-block d-sm-none">
      <div className="container">
        <div className="row header d-flex align-items-center">
          <div className="col">
            <h4 className="m-0 p-0 headline">Buckets of Bookmarks</h4>
          </div>
          <div className="col-auto">
            <button onClick={toggleMenu}>X</button>
          </div>
        </div>

        <div className={toggle ? "show" : "hide"}>
          <div className="row">
            <div className="col">
              <Links />
            </div>
          </div>
        </div>

      </div>

      <style>{`

      .show {
        display: block;
      }

      .hide {
        display: none;
      }

      .navbar-wrapper {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1140px;
      }

      .header {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 15px;
        height: 45px;
      }

      .headline {
        text-align: center;
        padding: 0;

      }

      .wrapper-mobile {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #fff;
        clip-path: circle(22px at calc(100% - 45px) 65px);
        transition: all 0.3s ease-in-out;
      }

      #active:checked ~ .wrapper-mobile {
        clip-path: circle(75%);
      }

      .menu-btn {
        position: fixed;
        right: 24px;
        top: 45px;
        z-index: 2;
        text-align: center;
        height: 45px;
        width: 45px;
      }

      .wrapper-mobile ul li {
        color: #fff;
        text-decoration: none;
      }
      `}</style>
    </div>

  )
}

export default Navbar;