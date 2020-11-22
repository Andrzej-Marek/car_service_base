import { Currency, PaymentMethod } from "../enums";
import { ServiceCostElement } from "./serviceCostElement.type";
export interface ServiceCost {
    id: number;
    currency: Currency;
    price_variant: PaymentMethod;
    costs_list: ServiceCostElement[];
}
