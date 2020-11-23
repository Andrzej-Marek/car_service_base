import { Currency } from "../enums";

export interface ServiceCostTable {
    currency: Currency;
    title: string;
    quantity: number;
    priceNet: number;
    priceGross: number;
    total: number;
}
