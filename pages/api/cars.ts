import { NextApiResponse, NextApiRequest } from 'next';
import { getCars } from 'database/api/car';

export default async function cars(req: NextApiRequest, res: NextApiResponse) {
    const cars = await getCars(req.query);
    res.json(cars);
}
