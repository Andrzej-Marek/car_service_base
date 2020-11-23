import { Currency, PriceVariant } from "../enums";
import { ServiceCostElement } from "./serviceCostElement.type";
export interface ServiceCost {
    id: number;
    currency: Currency;
    price_variant: PriceVariant;
    costs_list: ServiceCostElement[];
}
