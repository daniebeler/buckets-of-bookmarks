import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="d-none d-sm-block">
        <div className="header">
          <div className="row">
            <div className="col">
              <Link href="/">
                <h4 className="m-0 headline">Collections</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-sm-none">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">fief</label>

        <div className="header">
          <div className="row">
            <div className="col">
              <Link href="/">
                <h4 className="m-0 headline">Collections</h4>
              </Link>
            </div>
          </div>
        </div>


        <div className="wrapper-mobile">
          <ul className="menu">
            <li>Fuuf</li>
            <li>Fuuf</li>
            <li>Fuuf</li>
            <li>Fuuf</li>
          </ul>
        </div>
      </div>

      <style>{`

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
      }

      .headline {
        text-align: center;
        padding: 10px;
      }

      .wrapper-mobile {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom right, #ccc, #b1aee7);
        clip-path: circle(20px at calc(100% - 45px) 65px);
        transition: all 0.3s ease-in-out;
      }

      #active:checked ~ .wrapper-mobile {
        clip-path: circle(75%);
      }

      .menu-btn {
        position: absolute;
        right: 30px;
        top: 20px;
        z-index: 2;
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