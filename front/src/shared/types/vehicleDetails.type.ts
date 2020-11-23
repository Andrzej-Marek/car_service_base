export interface VehicleDetails {
    id: number;
    make: string;
    model: string;
    production_year: string | null;
    mileage: {
        id: number;
        mileage: number;
        unit: string;
    } | null;
    engine_capacity: number;
    engine_power: number;
    date_of_registration: string | null;
    vin_number: string | null;
    registration_number: string | null;
}
