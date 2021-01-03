import { PaymentMethod } from "../enums";

export interface OtherServiceInformations {
    id: number;
    payment_method: PaymentMethod | null;
    warranty_time: Date | null;
    service_date: Date;
}
