import React, { FC } from "react";
import { CarDetailsList, ContentTile, Table } from "@/components";
import styled from "styled-components";
import { Currency } from "@/shared/enums";
import { ServiceCost } from "@/shared/types";
import { serviceDetailsColumns } from "./serviceDetails.columns";
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {

    const { t } = useTranslation(["carSpecification", "serviceCosts"]);

    // TODO: Mapper for this structure and pass curreny to columns
    const mockData: ServiceCost[] = [
        {
            id: 1,
            title: "Sprzęgło kompresora",
            quantity: 1,
            priceNet: 22,
            priceGross: 3332,
            currency: Currency.PLN,
        },
        {
            id: 2,
            title: "Sprzęgło kompresora2 ",
            quantity: 5,
            priceNet: 42,
            priceGross: 212,
            currency: Currency.PLN,
        },
        {
            id: 3,
            title: "Sprzęgło",
            quantity: 2,
            priceNet: 142,
            priceGross: 4212,
            currency: Currency.PLN,
        },
    ];

    return (
        <Wrapper>
            <ContentTile title={t("carSpecification:carDetails.title")}>
                <CarDetailsList />
            </ContentTile>
            <ContentTile title={t("serviceCosts:costs")}>
                <Table columns={serviceDetailsColumns} data={mockData} />
            </ContentTile>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px 0;
`;

export default ServiceDetails;
