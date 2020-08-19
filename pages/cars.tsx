import Search from 'components/Search';
import { GetServerSideProps } from 'next';
import { getMakes, getModels, getCars } from 'database/api/car';
import { getAsString } from 'utils';
import { CarModel, MakeSelect, ModelSelect } from 'database/models/Car';
import Pagination from 'components/Pagination';
import CarItem from 'components/CarItem';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { stringify } from 'querystring'; //Object to query string
import { useState } from 'react';
import deepEqual from 'fast-deep-equal';
import CarNotFound from 'components/CarNotFound';

export interface CarsListProps {
    makes: MakeSelect[];
    models: ModelSelect[];
    cars: CarModel[];
    totalPages: number;
    totalItems: number;
}

export default function CarsList({ makes, models, cars, totalPages, totalItems }: CarsListProps) {
    const { query } = useRouter();
    const [serverQuery] = useState(query);
    const { data, isValidating } = useSWR('api/cars?' + stringify(query), {
        dedupingInterval: 10000,
        initialData: deepEqual(query, serverQuery) ? { cars, totalPages, totalItems } : undefined,
    });
    const hasResults = data?.cars?.length ? true : false;

    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="grid justify-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                <div className="grid-cols-1 self-start justify-items-center mt-5 mx-12 px-4 py-1 rounded shadow-lg col-span-1">
                    <Search makes={makes} models={models} />
                </div>

                {!hasResults && <CarNotFound text={'No results found ...'} backButton={false} />}

                <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 m-5 px-2 col-span-2">
                    {(data?.cars || []).map((car) => (
                        <CarItem key={car.id} car={car} />
                    ))}
                </div>
            </div>
            {hasResults && (
                <Pagination totalPages={data?.totalPages || 0} totalItems={data?.totalItems || 0} />
            )}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<CarsListProps> = async (context) => {
    const make = getAsString(context.query.make || '') || 'all';

    const [makes, models, pagination] = await Promise.all([
        getMakes(),
        getModels(make),
        getCars(context.query),
    ]);

    return {
        props: {
            makes,
            models,
            cars: pagination.cars,
            totalPages: pagination.totalPages,
            totalItems: pagination.totalItems,
        },
    };
};
