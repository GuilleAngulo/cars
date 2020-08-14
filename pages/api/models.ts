import { NextApiResponse, NextApiRequest } from 'next';
import { getModels } from 'database/api/car';
import { getAsString } from 'utils';

export default async function models(req: NextApiRequest, res: NextApiResponse) {
    const make = getAsString(req.query.make);
    const models = await getModels(make);
    res.json(models);
}
