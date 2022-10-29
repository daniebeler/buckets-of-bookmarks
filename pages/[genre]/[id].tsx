import Head from "next/head";
import Collection from "../../components/Collection"
import Links from "../../components/Links";

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
        <meta name="msvalidate.01" content="69FEAD321D5E273091E169DF37464921" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg">

      </div>

      <div className="inner-page-wrapper w-100">
        <div className="row m-0 height-screen">
          <div className="col-auto p-0 d-none d-sm-block height-full">
            <div className="sidebar h-full">
              <Links />
            </div>
          </div>
          <div className="col p-0 height-full">
            <div className="content h-full">
              <div className="container-fluid flex header-wrapper">
                <div className="container">
                  <h1 className="text-center headline">{props.data.name}</h1>
                </div>
              </div>
              <Collection data={props.data.items} />
            </div>

          </div>
        </div>
      </div>


      <style>{`

      .height-screen {
        height: 100vh;
      }

      .height-full {
        height: 100%;
      }

      .filler {
        flex-grow: 1;
        display: flex;
      }

      .row-wrapper {
        height: 100vh;
      }

      .col-sidebar {
        width: 200px;
      }

      .category {
        padding-left: 16px;
      }

      .bg {
        background-color: #3CCF4E;
        // background-color: { props.data.name };
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -1;
      }

      .headline {
        color: #fff;
        font-size: 3rem;
        margin: 0;
      }

      .sidebar {
        padding: 15px;
        width: 100%;
        height: 100vh;
        overflow: auto;
        background-color: #fff;
      }
      
      

        .page-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .inner-page-wrapper {
          padding: 0px;
          display: flex;
          flex-direction: column;
        }

        .content {
          border-radius: 15px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .header-wrapper {
          padding: 100px 0
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
          id: 'ai-art'
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
