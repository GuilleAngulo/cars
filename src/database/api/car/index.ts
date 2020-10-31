import db from 'database/connection';
import { CarModel, MakeSelect, ModelSelect } from 'database/models/Car';
import { ParsedUrlQuery } from 'querystring';
import { getValueString, getValueNumber } from 'utils';

export async function getCarById<CarModel>(id?: number | string | string[]) {
    const [car] = await db<CarModel[]>('cars').where('id', id);
    return car;
}

export async function getMakes() {
    return await db<MakeSelect[]>('cars')
        .select(db.ref('make').as('name'))
        .count('make', { as: 'count' })
        .groupBy('make');
}

export async function getModels(make: string) {
    return await db<ModelSelect[]>('cars')
        .select(db.ref('model').as('name'))
        .count('model', { as: 'count' })
        .where('make', make)
        .groupBy('model');
}

export async function getCars(query: ParsedUrlQuery) {
    const make = getValueString(query.make || '');
    const model = getValueString(query.model || '');
    const minPrice = getValueNumber(query.minPrice || '');
    const maxPrice = getValueNumber(query.maxPrice || '');

    const page = getValueNumber(query.page || '') || 1;
    const itemsPerPage = getValueNumber(query.itemsPerPage || '') || 4;
    const offset = (page - 1) * itemsPerPage;

    const carsPromise = db<CarModel[]>('cars')
        .where(function () {
            if (make) this.where('make', make);
        })
        .andWhere(function () {
            if (model) this.where('model', model);
        })
        .andWhere(function () {
            if (minPrice) this.where('price', '>=', minPrice);
        })
        .andWhere(function () {
            if (maxPrice) this.where('price', '<=', maxPrice);
        })
        .limit(itemsPerPage)
        .offset(offset);

    interface totalItems {
        count?: number;
    }

    const totalItemsPromise = db<totalItems>('cars')
        .count('model', { as: 'count' })
        .where(function () {
            if (make) this.where('make', make);
        })
        .andWhere(function () {
            if (model) this.where('model', model);
        })
        .andWhere(function () {
            if (minPrice) this.where('price', '>=', minPrice);
        })
        .andWhere(function () {
            if (maxPrice) this.where('price', '<=', maxPrice);
        });

    const [cars, totalItemsArray] = await Promise.all([carsPromise, totalItemsPromise]);

    if (cars instanceof Error || totalItemsArray instanceof Error) {
        console.error('Error retrieving the cars');
        throw Error;
    }

    const totalItems = totalItemsArray[0]['count'] as number;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return { cars, totalPages, totalItems };
}
