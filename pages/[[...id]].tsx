import Head from "next/head";
import Collection from "../components/Collection"
import Home from "../components/Home";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import styles from '../styles/App.module.scss'

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
        <link rel="icon" href="/bob-circle.svg" />
      </Head>

      <Navbar />

      <div className={styles.inner_page_wrapper + " w-100"}>
        <div className={"row m-0 " + styles.height_screen}>
          <div className={"col-12 col-sm-auto p-0 d-none d-sm-block " + styles.height_full}>
            <div className={styles.sidebar + " h-full"}>
              <Links />
            </div>
          </div>

          {
            props.data &&
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
          }

          {
            !props.data &&
            <div className={"col p-0 " + styles.height_full}>
              <div className={styles.content + " h-full"}>
                  <Home />
              </div>
            </div>
          }

        </div>
      </div>
    </div>

  )
}


export async function getStaticProps(context: any) {
  let genre
  let id

  if (context.params.id) {
    genre = context.params.id[0]
    id = context.params.id[1]
  }

  if (genre && id) {
    const file = await import('../data/' + genre + '/' + id + '.json')
    return {
      props: {
        data: file.data
      }
    }
  }
  else {
    return {
      props: {}
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params:
        {
          id: [
            ''
          ]
        }
      },
      {
        params:
        {
          id: [
            'general',
            'google'
          ]
        }
      },
      {
        params:
        {
          id: [
            'general',
            'blogs'
          ]
        }
      },
      {
        params:
        {
          id: [
            'general',
            'social-media'
          ]
        }
      },
      {
        params:
        {
          id: [
            'general',
            'fun'
          ]
        }
      },
      {
        params:
        {
          id: [
            'design',
            'colors'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'icons'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'games'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'inspiration'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'systems'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'illustrations'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'best-practices'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'tools'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'ai-art'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'stock-photos'
          ]
        }
      },
      {
        params: {
          id: [
            'design',
            'fonts'
          ]
        }
      },
      {
        params: {
          id: [
            'productivity',
            'tools'
          ]
        }
      },
      {
        params: {
          id: [
            'productivity',
            'books'
          ]
        }
      },
      {
        params: {
          id: [
            'coding',
            'books'
          ]
        }
      },
      {
        params: {
          id: [
            'coding',
            'practice'
          ]
        }
      },
      {
        params: {
          id: [
            'coding',
            'ideas'
          ]
        }
      },
      {
        params: {
          id: [
            'coding',
            'tools'
          ]
        }
      },
      {
        params: {
          id: [
            'coding',
            'vscode-extensions'
          ]
        }
      }
    ],
    fallback: false
  };
}
