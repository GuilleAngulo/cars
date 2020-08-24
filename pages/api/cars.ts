import { NextApiResponse, NextApiRequest } from 'next';
import { getCars } from 'database/api/car';

export default async function cars(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const cars = await getCars(req.query);
            if (!cars) {
                return res.status(400).json({ message: 'Cars not found.' });
            }
            res.status(200).json(cars);
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
