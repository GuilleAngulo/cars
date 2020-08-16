import Search from 'pages/index';
import { GetServerSideProps } from 'next';
import { getMakes, getModels, getCars } from 'database/api/car';
import { getAsString } from 'utils';
import { CarModel, MakeSelect, ModelSelect } from 'database/models/Car';
import Pagination from 'components/Pagination';
import { useRouter } from 'next/router';

export interface CarsListProps {
    makes: MakeSelect[];
    models: ModelSelect[];
    cars: CarModel[];
    totalPages: number;
}

export default function CarsList({ makes, models, cars, totalPages }: CarsListProps) {
    const { query } = useRouter();
    const page = parseInt(getAsString(query.page) || '1');
    return (
        <>
            <div className="flex">
                <div className="w-full">
                    <Search makes={makes} models={models} />
                </div>
                <div className="w-3/6">
                    <pre style={{ fontSize: '1rem' }}>
                        {JSON.stringify({ cars: cars[0], totalPages }, null, 2)}
                    </pre>
                </div>
            </div>
            <Pagination
                page={page}
                totalPages={totalPages}
                itemsPerPage={cars.length}
                query={query}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cars = getCars(context.query);

    const make = getAsString(context.query.make || '') || 'all';

    const [makes, models, pagination] = await Promise.all([
        getMakes(),
        getModels(make),
        getCars(context.query),
    ]);

    return { props: { makes, models, cars: pagination.cars, totalPages: pagination.totalPages } };
};
