import { Company } from "./company.type";
import { OtherServiceInformations } from "./otherServiceInformations.type";
import { Picture } from "./picture.type";
import { ServiceCost } from "./serviceCost.type";
import { VehicleDetails } from "./vehicleDetails.type";

export interface Service {
    photos: Picture[];
    comments: string | null;
    other_informations: OtherServiceInformations | null;
    service_description: string;
    service_diagnosis: string;
    service_id: string;
    date_of_registration: string | null;
    company: Company;
    service_costs: ServiceCost;
    vehicle_details: VehicleDetails;
    created_at: Date;
    published_at: Date;
    updated_at: Date;
}
