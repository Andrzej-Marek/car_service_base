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
    OtherInformationsList,
} from "@/components";
import styled from "styled-components";
import { Service, ServiceCost, ServiceCostElement } from "@/shared/types";
import { useTranslation } from "react-i18next";
import { serviceDetailsColumns } from "./serviceDetails.columns";
import { useQuery } from "react-query";
import { getApiDetails } from "@/shared/api";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {
    const { t } = useTranslation("tile");

    const { isLoading, error, data } = useQuery<Service>(
        "serviceDetails",
        () => getApiDetails("2aaba566"),
        {
            retry: false,
        }
    );

    // TODO: Mapper for this structure and pass curreny to columns
    // const mockData: ServiceCost[] = [
    //     {
    //         id: 1,
    //         title: "Sprzęgło kompresora",
    //         quantity: 1,
    //         priceNet: 22,
    //         priceGross: 3332,
    //         currency: Currency.PLN,
    //     },
    //     {
    //         id: 2,
    //         title: "Sprzęgło kompresora2 ",
    //         quantity: 5,
    //         priceNet: 42,
    //         priceGross: 212,
    //         currency: Currency.PLN,
    //     },
    //     {
    //         id: 3,
    //         title: "Sprzęgło",
    //         quantity: 2,
    //         priceNet: 142,
    //         priceGross: 4212,
    //         currency: Currency.PLN,
    //     },
    // ];
    const mockData: ServiceCost[] = [];
    if (isLoading) {
        // TODO: Make a loading spinner
        return <div>Loading...</div>;
    }
    if (error) {
        // TODO: Make a not found information

        return <div>Nie znaleziono</div>;
    }

    if (!data) {
        return <div>Brak informacji o servisie</div>;
    }

    const {
        vehicle_details,
        created_at,
        company,
        comments,
        service_diagnosis,
        service_description,
        photos,
        other_informations,
        service_costs,
    } = data;
    console.log("service_costs", service_costs);
    return (
        <Wrapper>
            <Grid43>
                <ContentTile title={t("vehicleDetails.title")}>
                    <VehicleDetailsList vehicleDetails={vehicle_details} />
                </ContentTile>
                <ContentTile title={t("servisTile.title")}>
                    <BasicServiceListInfo company={company} serviceDate={created_at} />
                </ContentTile>
            </Grid43>
            <Grid11>
                <ContentTile title={t("diagnosisTile.title")}>
                    <BasicTileText text={service_diagnosis} />
                </ContentTile>
                <ContentTile title={t("servisDescriptionTile.title")}>
                    <BasicTileText text={service_description} />
                </ContentTile>
            </Grid11>
            <GridFull>
                <ContentTile title={t("costTile.title")}>
                    <Table data={service_costs.costs_list} columns={serviceDetailsColumns} />
                </ContentTile>
            </GridFull>
            {photos.length && (
                <GridFull>
                    <ContentTile title={t("photosTile.title")}>
                        <PhotosList photos={photos} />
                    </ContentTile>
                </GridFull>
            )}
            {other_informations && (
                <GridFull>
                    <ContentTile title={t("otherInformationTile.title")}>
                        <OtherInformationsList otherInformations={other_informations} />
                    </ContentTile>
                </GridFull>
            )}
            {comments && (
                <GridFull>
                    <ContentTile title={t("commentsTile.title")}>
                        <BasicTileText text={comments} />
                    </ContentTile>
                </GridFull>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px 0;
`;

export default ServiceDetails;
