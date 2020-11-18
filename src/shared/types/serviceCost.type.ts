import { Currency } from "../enums";

export interface ServiceCost {
    id: number;
    title: string;
    quantity: number;
    priceNet: number;
    priceGross: number;
    currency: Currency;
}
