import { useState } from "react";
import styles from '../styles/Navbar.module.scss';
import Overlay from "./Overlay";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <div className={styles.navbar_wrapper + " d-block d-sm-none"}>
      <div className="container">
        <div className={styles.header + " row d-flex align-items-center"}>
          <div className="col">
            <h4 className={styles.headline + " m-0 p-0"}>Buckets of Bookmarks</h4>
          </div>
          <div className="col-auto">
            <button onClick={toggleMenu}>X</button>
          </div>
        </div>
        <div className={toggle ? styles.show : styles.hide}>
          <Overlay toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;