// noinspection JSUnusedGlobalSymbols

import {NextApiRequest, NextApiResponse} from 'next';
import {parse} from "../../utils/posts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(parse(req.query.name as string));
};