import Link from "next/link";
import Collection from "../../components/Collection"
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div>
      <Navbar />

      <div className="sidebar">
        <h2>Design</h2>
        <Link href="/design/colors">Colors</Link>
        <Link href="/design/icons">Icons</Link>
        <Link href="/design/illustrations">Illustrations</Link>
        <Link href="/design/stock-photos">Stock Photos</Link>
        <Link href="/design/tools">Tools</Link>
        <h2>Productivity</h2>
        <Link href="/productivity/tools">Tools</Link>
      </div>

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
        .sidebar {
          margin: 0;
          padding: 0;
          width: 200px;
          background-color: #f1f1f1;
          position: fixed;
          height: 100%;
          overflow: auto;
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
          background-color: #555;
          color: white;
        }

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
          id: 'illustrations'
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
      }
    ],
    fallback: false
  };
}
