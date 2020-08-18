import { CarModel } from 'database/models/Car';
import Link from 'next/link';

export interface CarItemProps {
    car: CarModel;
}

export default function CarItem({ car }: CarItemProps) {
    return (
        <Link href="/car/[make]/[brand]/[id]" as={`/car/${car.make}/${car.model}/${car.id}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="relative pb-2/3">
                    <img
                        className="absolute w-full h-full object-cover"
                        src={car.photoUrl}
                        alt={`${car.make} ${car.model} (${car.year})`}
                    />
                </div>
                <div className="px-6 py-4 overflow-hidden">
                    <div className="font-bold text-xl mb-2">{`${car.make} ${car.model} (${car.year})`}</div>
                    <div className="font-bold text-l text-gray-800 mb-2">R$ {car.price}</div>
                    <p className="text-gray-700 text-base">{car.details}</p>
                </div>
            </div>
        </Link>
    );
}
