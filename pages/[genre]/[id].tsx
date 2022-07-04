import Head from "next/head";
import Link from "next/link";
import Collection from "../../components/Collection"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div className="page-wrapper">

      <Head>
        <title>Buckets Of Bookmarks</title>
        <meta
          name="description"
          content="Categorized collections of useful websites and tools"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg">

      </div>
      <Navbar />

      <div className="inner-page-wrapper w-100">
        <div className="row">
          <div className="col-5 col-md-3 d-none d-sm-block">
            <div className="sidebar">
              <h4 className="category">Design</h4>
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
              <h4 className="category">Entrepreneurship</h4>
              <Link href="/entrepreneurship/movies">Movies</Link>
              <h4 className="category">Productivity</h4>
              <Link href="/productivity/tools">Tools</Link>
              <Link href="/productivity/books">Books</Link>
              <h4 className="category">Coding</h4>
              <Link href="/coding/books">Books</Link>
              <Link href="/coding/practice">Practice</Link>
              <Link href="/coding/ideas">Project Ideas</Link>
              <Link href="/coding/vscode-extensions">VS-Code Extensions</Link>
            </div>
          </div>
          <div className="col-12 col-sm-7 col-md-9">
            <div className="content">
              <div className="container-fluid header-wrapper">
                <div className="container">
                  <h1 className="text-center">{props.data.name}</h1>
                </div>
              </div>

              <Collection data={props.data.items} />
            </div>

          </div>
        </div>
      </div>

      <Footer />


      <style>{`

      .category {
        padding-left: 16px;
      }

      .bg {
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% );
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -1;
      }

      .sidebar {
        padding: 15px;
        width: 100%;
        height: 100%;
        overflow: auto;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.4);
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
        background: rgba(255, 255, 255, 0.4);
        border-radius: 10px;
      }

        .page-wrapper {
          // background-image: linear-gradient(to bottom right, #b5d4f6, #b1aee7);
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
          background: rgba(255, 255, 255, 0.4);
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
          id: 'games'
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
          genre: 'entrepreneurship',
          id: 'movies'
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
