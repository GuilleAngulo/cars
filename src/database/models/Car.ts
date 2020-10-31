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

export interface MakeSelect {
    name: string;
    count: number;
}

export interface ModelSelect {
    name: string;
    count: number;
}
