import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="d-none d-sm-block">
        <div className="header">
          <Link href="/">
            <h2 className="p-2 m-0">Collections</h2>
          </Link>
          <hr className="m-0" />
        </div>

        <div className="sidebar">
          <h2>Design</h2>
          <Link href="/design/colors">Colors</Link>
          <Link href="/design/icons">Icons</Link>
          <Link href="/design/illustrations">Illustrations</Link>
          <Link href="/design/stock-photos">Stock Photos</Link>
          <Link href="/design/best-practices">Best Practices</Link>
          <Link href="/design/inspiration">Inspiration</Link>
          <Link href="/design/tools">Tools</Link>
          <h2>Productivity</h2>
          <Link href="/productivity/tools">Tools</Link>
          <Link href="/productivity/books">Books</Link>
          <h2>Coding</h2>
          <Link href="/coding/books">Books</Link>
          <Link href="/coding/practice">Practice</Link>
          <Link href="/coding/vscode-extensions">VS-Code Extensions</Link>
        </div>
      </div>

      <div className="d-block d-sm-none">
        <div className="header">
          <Link href="/">
            <h2 className="p-2 m-0">Collections</h2>
          </Link>
          <hr className="m-0" />
        </div>
      
      </div>

      <style>{`

      .header {
        position: fixed;
        width: 100%;
        background-color: white;
      }

        .sidebar {
          margin: 50px 0 0 0;
          padding: 0;
          width: 200px;
          background-color: #f1f1f1;
          position: fixed;
          height: 100%;
          overflow: auto;
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
          background-color: #555;
          color: white;
        }

        @media screen and (max-width: 575px) {
          div.content {
            margin-left: 0;
          }
        }
      `}</style>
    </div>

  )
}

export default Navbar;