import db from 'database/connection';
import { CarModel, CarMake } from 'database/models/Car';

export async function getCarById(id?: number | string | string[]) {
    const [car] = await db<CarModel>('cars').where('id', id);
    return car;
}

export async function getMakes() {
    return await db<CarMake[]>('cars')
        .select(db.ref('make').as('name'))
        .count('make', { as: 'count' })
        .groupBy('make');
}

export async function getModels(make: string) {
    return await db<CarModel[]>('cars')
        .select(db.ref('model').as('name'))
        .count('model', { as: 'count' })
        .where('make', make)
        .groupBy('model');
}
