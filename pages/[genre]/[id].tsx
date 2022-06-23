import Collection from "../../components/Collection"
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div>
      <Navbar />

      <div className="container-fluid header-wrapper">
        <div className="container">
          <h1>{props.data.name}</h1>
          <h1>Collection</h1>
        </div>
      </div>

      <Collection data={props.data.items} />
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
          id: 'illustrations'
        }
      },
      {
        params:
        {
          genre: 'productivity',
          id: 'tools'
        }
      }
    ],
    fallback: false
  };
}
