import Head from "next/head";
import Collection from "../../components/Collection"
import Links from "../../components/Links";
import styles from '../../styles/Home.module.css'

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div className={styles.page_wrapper}>

      <Head>
        <title>Buckets Of Bookmarks</title>
        <meta
          name="description"
          content="Categorized collections of useful websites and tools"
        />
        <meta name="msvalidate.01" content="69FEAD321D5E273091E169DF37464921" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.inner_page_wrapper + " w-100"}>
        <div className={"row m-0 " + styles.height_screen}>
          <div className={"col-auto p-0 d-none d-sm-block " + styles.height_full}>
            <div className={styles.sidebar + " h-full"}>
              <Links />
            </div>
          </div>
          <div className={"col p-0 " + styles.height_full}>
            <div className={styles.content + " h-full"}>
              <div className={"container-fluid flex " + styles.header_wrapper}>
                <div className="container">
                  <h1 className={"text-center " + styles.headline}>{props.data.name}</h1>
                </div>
              </div>
              <Collection data={props.data.items} />
            </div>

          </div>
        </div>
      </div>


      <style>{`

      
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
