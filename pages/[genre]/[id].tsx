import { useRouter } from 'next/router'

import fsPromises from 'fs/promises';
import path from 'path'
import Collection from "../../components/Collection"
import Navbar from "../../components/Navbar";
import { useEffect, useState } from 'react';

export default function Post() {

  const router = useRouter()
  const { genre, id } = router.query

  const [data, setData] = useState<any>(null)

  useEffect(() => {
    console.log('useEffect fired!', { asPath: router.asPath });
    fetch('/api/' + genre + '/' + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [router.asPath]);



  if (!data) return <p>No data</p>

  return (
    <div>
      <Navbar />

      <div className="container-fluid header-wrapper">
        <div className="container">
          <p>{genre}</p>
          <h1>{data.objectData.name}</h1>
          <h1>Collection</h1>
        </div>
      </div>

      <Collection data={data.objectData.data} />
    </div>

  )
}


export async function getStaticProps() {

  return {
    props: {"fief": "fief"}
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
