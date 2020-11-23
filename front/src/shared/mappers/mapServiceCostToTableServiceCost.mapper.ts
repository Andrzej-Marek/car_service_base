import { PriceVariant } from "../enums";
import { ServiceCost, ServiceCostTable } from "../types";

export const mapServiceCostToTableServiceCost = (
    serviceCosts: ServiceCost
): ServiceCostTable[] => {
    if (!serviceCosts || !serviceCosts.costs_list) {
        return [];
    }
    return serviceCosts.costs_list.map((serviceCost) => {
        const priceNet =
            serviceCosts.price_variant === PriceVariant.Net
                ? serviceCost.price
                : serviceCost.price / 1.23;
        const priceGross =
            serviceCosts.price_variant === PriceVariant.Gross
                ? serviceCost.price
                : serviceCost.price * 1.23;

        return {
            title: serviceCost.title,
            quantity: serviceCost.quantity,
            currency: serviceCosts.currency,
            priceNet,
            priceGross,
            total: priceGross * serviceCost.quantity,
        } as ServiceCostTable;
    });
};
