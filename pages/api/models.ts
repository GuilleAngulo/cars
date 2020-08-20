import { NextApiResponse, NextApiRequest } from 'next';
import { getModels } from 'database/api/car';
import { getAsString } from 'utils';

export default async function models(req: NextApiRequest, res: NextApiResponse) {
    const make = getAsString(req.query.make);

    if (req.method === 'GET') {
        try {
            const models = await getModels(make);
            if (!models) {
                return res.status(400).json({ message: 'Models not found.' });
            }
            res.status(200).json(models);
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .send({ error: 'Internal Server Error. Error retrieving data from database.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
