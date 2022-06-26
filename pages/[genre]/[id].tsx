import Link from "next/link";
import Collection from "../../components/Collection"
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div>
      <Navbar />

      

      <div className="content">
         <div className="container-fluid header-wrapper">
        <div className="container">
          <h1>{props.data.name}</h1>
          <h1>Collection</h1>
        </div>
      </div>

      <Collection data={props.data.items} />
      </div>

     

      <style>{`
        div.content {
          margin-left: 200px;
          padding: 1px 16px;
          height: 1000px;
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
          id: 'vscode-extensions'
        }
      }
    ],
    fallback: false
  };
}
