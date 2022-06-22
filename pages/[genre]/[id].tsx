// import Collection from "../../components/Collection";

import fsPromises from 'fs/promises';
import path from 'path'
import Collection from "../../components/Collection"
import Navbar from "../../components/Navbar";

export default function Post(objectData) {

  return (
    <div>
      <Navbar />

      <Collection data={objectData.data}/>
    </div>

  )
}


export async function getStaticProps() {
  const filePath = await path.join(process.cwd(), 'data/design/tools.json');
  console.log(filePath)
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData);
  console.log(objectData)

  return {
    props: objectData
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { genre: 'design', id: 'tools' } }
    ],
    fallback: false
  };
}
