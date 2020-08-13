export interface CarModel {
    id: number;
    make: string;
    model: string;
    year: number;
    fuelType: string;
    kilometers: number;
    details: string;
    price: number;
    photoUrl: string;
}

export interface CarMake {
    name: string;
    count: number;
}

export interface CarModel {
    name: string;
    count: number;
}
