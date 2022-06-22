import fsPromises from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { genre, id } = req.query
  const filePath = path.join(process.cwd(), 'data/' + genre + '/' + id + '.json');
  const data = await fsPromises.readFile(filePath)
  const objectData = await JSON.parse(data);
  console.log(objectData)
  res.status(200).json({ objectData })
}
