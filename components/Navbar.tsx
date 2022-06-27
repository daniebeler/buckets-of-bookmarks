import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="d-none d-sm-block">
        <div className="header container">
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
        <div className="header">
          <Link href="/">
            <h2 className="p-2 m-0">Collections</h2>
          </Link>
        </div>
      </div>

      <style>{`

      .navbar-wrapper {
        padding-top: 20px;
      }

      .header {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 15px;
      }

      .headline {
        text-align: center;
        padding: 10px
      }
      `}</style>
    </div>

  )
}

export default Navbar;