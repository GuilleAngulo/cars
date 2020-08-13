import db from 'database/connection';
import { CarModel, CarMake } from 'database/models/Car';

export async function getCarById(id?: number | string | string[]) {
    const [car] = await db<CarModel>('cars').where('id', id);
    return car;
}

export async function getMakes() {
    return await db<CarMake>('cars').select('make').count('make', { as: 'count' }).groupBy('make');
}
