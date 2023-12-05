import Head from "next/head";
import Collection from "../components/Collection"
import Home from "../components/Home";
import Links from "../components/Links";
import Navbar from "../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div>

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

      <div className="w-full">
        <div className="flex flex-row m-0 pt-[45px] md:pt-0 h-screen">
          <div className=" p-0 hidden md:block h-full">
            <div className="p-3 h-full overflow-scroll bg-gray-800">
              <Links toggleMenu={() => {}}/>
            </div>
          </div>

          {
            props.data &&
            <div className="col p-0 h-full w-full">
              <div className="h-full bg-gray-900 overflow-scroll">
                <div className="container-fluid flex py-24">
                  <div className="container">
                    <h1 className="text-center text-white text-4xl">{props.data.name}</h1>
                  </div>
                </div>
                <Collection data={props.data.items} />
              </div>
            </div>
          }

          {
            !props.data &&
            <div className="col p-0 h-full w-full">
              <div className={"h-full"}>
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
        params:
        {
          id: [
            'design',
            'ui-components'
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
            'resources'
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
      },
      {
        params: {
          id: [
            'cybersecurity',
            'practice'
          ]
        }
      },
      {
        params: {
          id: [
            'cybersecurity',
            'games'
          ]
        }
      },
      {
        params: {
          id: [
            'cybersecurity',
            'osint'
          ]
        }
      }
    ],
    fallback: false
  };
}
