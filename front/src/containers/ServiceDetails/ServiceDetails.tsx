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
    LoadingPage,
    ServiceNotFound,
} from "@/components";
import styled from "styled-components";
import { Service, ServiceCostTable } from "@/shared/types";
import { useTranslation } from "react-i18next";
import { serviceDetailsColumns } from "./serviceDetails.columns";
import { useQuery } from "react-query";
import { getApiDetails } from "@/shared/api";
import { mapServiceCostToTableServiceCost } from "@/shared/mappers";
import { useParams } from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {
    const { t } = useTranslation("tile");
    const { serviceId } = useParams<{ serviceId: string }>();

    const { isLoading, error, data } = useQuery<Service>(
        "serviceDetails",
        () => getApiDetails(serviceId),
        {
            retry: false,
        }
    );

    if (isLoading) {
        return <LoadingPage />;
    }
    if (error) {
        return <ServiceNotFound />;
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

    const createCostListForTableFormat = (): ServiceCostTable[] => {
        console.log("service_costs", service_costs);
        const costList = service_costs.costs_list.map(
            (cost) =>
                ({
                    currency: service_costs.currency,
                    priceGross: cost.price_gross,
                    priceNet: cost.price_net,
                    quantity: cost.quantity,
                    title: cost.title,
                    total: cost.price_gross * cost.quantity,
                    taxRate: cost.tax_rate,
                } as ServiceCostTable)
        );

        return costList;
    };

    const createdCostList = createCostListForTableFormat();
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
            {createdCostList.length > 0 && (
                <GridFull>
                    <ContentTile title={t("costTile.title")}>
                        <Table<ServiceCostTable>
                            data={createdCostList}
                            columns={serviceDetailsColumns}
                        />
                    </ContentTile>
                </GridFull>
            )}
            {photos.length > 0 && (
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
