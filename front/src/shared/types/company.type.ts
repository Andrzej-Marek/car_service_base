import { Picture } from "./picture.type";

export interface Company {
    id: number;
    company_name: string;
    company_id: string;
    street: string;
    postal_code: string;
    street_number: string;
    city: string;
    published_at: Date;
    created_at: Date;
    updated_at: Date;
    vat_number: string;
    user: null;
    company_logo: Picture;
}
