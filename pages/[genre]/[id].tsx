import Link from "next/link";
import Collection from "../../components/Collection"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="inner-page-wrapper w-100">
        <div className="row">
          <div className="col-3 d-none d-sm-block">
            <div className="sidebar">
              <h2>Design</h2>
              <Link href="/design/colors">Colors</Link>
              <Link href="/design/fonts">Typography</Link>
              <Link href="/design/icons">Icons</Link>
              <Link href="/design/systems">Design Systems</Link>
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
              <Link href="/coding/ideas">Project Ideas</Link>
              <Link href="/coding/vscode-extensions">VS-Code Extensions</Link>
            </div>
          </div>
          <div className="col-12 col-sm-9">
            <div className="content">
              <div className="container-fluid header-wrapper">
                <div className="container">
                  <h1 className="text-center">{props.data.name}</h1>
                  {/* <h1 className="text-center">Collection</h1> */}
                </div>
              </div>

              <Collection data={props.data.items} />
            </div>

          </div>
        </div>
      </div>

      <Footer />


      <style>{`
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

        .page-wrapper {
          background-image: linear-gradient(to bottom right, #b5d4f6, #b1aee7);
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .inner-page-wrapper {
          padding: 20px 0px;
          max-width: 1140px;
          display: flex;
          flex-direction: column;
        }

        .content {
          background: rgba(255, 255, 255, 0.5);
          border-radius: 15px;
        }

        .header-wrapper {
          padding: 50px 0 50px 0
        }
      `}</style>
    </div>

  )
}


export async function getStaticProps(context: any) {

  const genre = context.params.genre
  const id = context.params.id

  const file = await import('../../data/' + genre + '/' + id + '.json')
  return {
    props: {
      data: file.data
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params:
        {
          genre: 'design',
          id: 'colors'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'icons'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'inspiration'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'systems'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'illustrations'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'best-practices'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'tools'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'stock-photos'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'fonts'
        }
      },
      {
        params:
        {
          genre: 'productivity',
          id: 'tools'
        }
      },
      {
        params:
        {
          genre: 'productivity',
          id: 'books'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'books'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'practice'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'ideas'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'vscode-extensions'
        }
      }
    ],
    fallback: false
  };
}
