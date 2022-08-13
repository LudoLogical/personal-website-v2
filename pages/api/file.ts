// noinspection JSUnusedGlobalSymbols

import fs from 'fs';
import {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const location = req.query.loc as string;
  const filePath = 'public/' + location;
  const file = fs.readFileSync(filePath);
  res.setHeader('Content-Disposition', 'attachment; filename='
    + location.substring(location.lastIndexOf('/') + 1));
  res.send(file);
};