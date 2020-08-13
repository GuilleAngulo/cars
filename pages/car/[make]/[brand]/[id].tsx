import { GetServerSideProps } from 'next';
import { CarModel } from 'database/models/Car';
import { FaRoute, FaGasPump, FaCalendarAlt } from 'react-icons/fa';
import { getCarById } from 'database/api/car';

interface CarDetailsProps {
    car: CarModel | null | undefined;
}

export default function CarDetails({ car }: CarDetailsProps) {
    if (!car) {
        return <h1>Sorry, car not found!</h1>;
    }
    return (
        <div className="container mx-auto m-12 shadow-2xl rounded-md">
            <div className="w-full lg:max-w-full lg:flex">
                <div
                    className="lg:h-auto h-full lg:w-3/6 sm:h-56 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${car.photoUrl})`,
                    }}
                    title={`${car.make} ${car.model} (${car.year})`}
                ></div>
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <div className="text-gray-900 font-bold text-3xl mb-2">{`${car.make} ${car.model}`}</div>
                        <span className="text-gray-900 rounded-t-lg font-bold text-xl bg-gray-500 bg-opacity-25 px-1 py-1 mb-2">
                            R$ {car.price}
                        </span>

                        <p className="text-gray-700 text-base mt-2">{car.details}</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col px-5 items-center">
                            <FaGasPump size={28} />
                            <p className="text-gray-900 leading-none py-2">{car.fuelType}</p>
                        </div>
                        <div className="flex flex-col px-5 items-center">
                            <FaCalendarAlt size={28} />
                            <p className="text-gray-900 leading-none py-2">{car.year}</p>
                        </div>
                        <div className="flex flex-col px-5 items-center">
                            <FaRoute size={28} />
                            <p className="text-gray-900 leading-none py-2">{car.kilometers}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    const car = await getCarById(id);
    return { props: { car } };
};
