import Collection from "../../components/Collection"
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  console.log(props)

  if (!props) return <p>No data</p>

  return (
    <div>
      <Navbar />

      <div className="container-fluid header-wrapper">
        <div className="container">
          <h1>{props.name}</h1>
          <h1>Collection</h1>
        </div>
      </div>

      <Collection data={props.items} />
    </div>

  )
}


export async function getStaticProps(context: any) {

  const genre = context.params.genre
  const id = context.params.id

  // const res = await fetch('http://localhost:3000/api/' + genre + '/' + id)

  const file = await import('../../data/' + genre + '/' + id + '.json')
  // const items = await res.json()
  console.log('meem', file.data)

  return {
    props: {
      items: file.data
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
