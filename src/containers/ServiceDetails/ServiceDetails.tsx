import React, { FC } from "react";
import {
    VehicleDetailsList,
    ContentTile,
    Grid43,
    Table,
    GridFull,
    BasicServiceListInfo,
    Grid11,
    BasicTileText,
    PhotosList,
} from "@/components";
import styled from "styled-components";
import { Currency } from "@/shared/enums";
import { ServiceCost } from "@/shared/types";
import { useTranslation } from "react-i18next";
import { serviceDetailsColumns } from "./serviceDetails.columns";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {
    const { t } = useTranslation("tile");

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
            <Grid43>
                <ContentTile title={t("vehicleDetails.title")}>
                    <VehicleDetailsList />
                </ContentTile>
                <ContentTile title={t("servisTile.title")}>
                    <BasicServiceListInfo />
                </ContentTile>
            </Grid43>
            <Grid11>
                <ContentTile title={t("diagnosisTile.title")}>
                    <BasicTileText
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />
                </ContentTile>
                <ContentTile title={t("servisDescriptionTile.title")}>
                    <BasicTileText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                </ContentTile>
            </Grid11>
            <GridFull>
                <ContentTile title={t("costTile.title")}>
                    <Table data={mockData} columns={serviceDetailsColumns} />
                </ContentTile>
            </GridFull>
            <GridFull>
                <ContentTile title={t("otherInformationTile.title")}>
                    <div>Hello</div>
                </ContentTile>
            </GridFull>
            <GridFull>
                <ContentTile title={t("photosTile.title")}>
                    <PhotosList />
                </ContentTile>
            </GridFull>
            <GridFull>
                <ContentTile title={t("commentsTile.title")}>
                    <BasicTileText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has " />
                </ContentTile>
            </GridFull>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px 0;
`;

export default ServiceDetails;
