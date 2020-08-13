import Search from 'pages/index';
import { GetServerSideProps } from 'next';
import { getMakes, getModels } from 'database/api/car';
import { getAsString } from 'utils/getAsString';
import { CarModel, MakeSelect, ModelSelect } from 'database/models/Car';

export interface CarsListProps {
    makes: MakeSelect[];
    models: ModelSelect[];
    cars: CarModel[];
    totalPages: number;
}

export default function CarsList({ makes, models, cars, totalPages }: CarsListProps) {
    return (
        <div className="flex">
            <div className="w-full">
                <Search makes={makes} models={models} />
            </div>
            <div className="w-full">Coches</div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const make = getAsString(context.query.make || '') || 'all';

    const [makes, models] = await Promise.all([getMakes(), getModels(make)]);

    return { props: { makes, models } };
};
