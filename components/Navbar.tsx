import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="d-none d-sm-block">
        <div className="header">
          <div className="row h-100 d-flex align-items-center">
            <div className="col">
              <h4 className="m-0 p-0 headline">Buckets of Bookmarks</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-sm-none">
        <input className="checkb" type="checkbox" id="active" />


        <div className="header">
          <div className="row h-100 d-flex align-items-center">
            <div className="col">
              <h4 className="m-0 p-0 headline">Buckets of Bookmarks</h4>
            </div>

          </div>
        </div>


        <div className="wrapper-mobile">
          <label htmlFor="active" className="menu-btn">X</label>
          <div className="sidebar">
            <h2>Design</h2>
            <Link href="/design/colors">Colors</Link>
            <Link href="/design/fonts">Typography</Link>
            <Link href="/design/games">Games</Link>
            <Link href="/design/icons">Icons</Link>
            <Link href="/design/systems">Design Systems</Link>
            <Link href="/design/illustrations">Illustrations</Link>
            <Link href="/design/stock-photos">Stock Photos</Link>
            <Link href="/design/best-practices">Best Practices</Link>
            <Link href="/design/inspiration">Inspiration</Link>
            <Link href="/design/tools">Tools</Link>
            <Link href="/design/ai-art">AI Art</Link>
            <h2>Entrepreneurship</h2>
            <Link href="/entrepreneurship/movies">Movies</Link>
            <Link href="/entrepreneurship/books">Books</Link>
            <h2>Productivity</h2>
            <Link href="/productivity/tools">Tools</Link>
            <Link href="/productivity/books">Books</Link>
            <h2>Coding</h2>
            <Link href="/coding/books">Books</Link>
            <Link href="/coding/practice">Practice</Link>
            <Link href="/coding/ideas">Project Ideas</Link>
            <Link href="/coding/vscode-extensions">VS-Code Extensions</Link>
          </div>
        </div>
      </div>

      <style>{`

      .checkb {
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
        // background: linear-gradient(to bottom right, #ccc, #b1aee7);
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


      .sidebar {
        padding: 15px;
        width: 100%;
        height: 100%;
        overflow: auto;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.5);
      }
      
      .sidebar a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
      }
       
      .sidebar a.active {
        background-color: #04AA6D;
        color: white;
      }
      
      .sidebar a:hover:not(.active) {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
      }
      `}</style>
    </div>

  )
}

export default Navbar;