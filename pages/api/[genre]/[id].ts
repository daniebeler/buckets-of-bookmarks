import fs from 'fs';
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
  console.info('fief', filePath)
  const data = await fs.readFileSync(filePath)
  const objectData = await JSON.parse(data.toString());
  return res.json({ objectData })
}
