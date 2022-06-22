import Collection from "../../components/Collection"
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div>
      <Navbar />

      <div className="container-fluid header-wrapper">
        <div className="container">
          <h1>{props.items.objectData.name}</h1>
          <h1>Collection</h1>
        </div>
      </div>

      <Collection data={props.items.objectData.data} />
    </div>

  )
}


export async function getStaticProps(context: any) {

  const genre = context.params.genre
  const id = context.params.id

  const res = await fetch('https://sunny-bombolone-77a1b7.netlify.app/api/' + genre + '/' + id)
  const items = await res.json()

  return {
    props: {
      items
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
          genre: 'productivity',
          id: 'tools'
        }
      }
    ],
    fallback: false
  };
}
