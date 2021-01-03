import { media, toUpperCase } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";
import { ListElement } from "../components";
import { useTranslation } from "react-i18next";
import { VehicleDetails } from "@/shared/types";
interface OwnProps {
    vehicleDetails: VehicleDetails;
}

type Props = OwnProps;

const VehicleDetailsList: FC<Props> = ({ vehicleDetails }) => {
    const { t } = useTranslation("vehicleSpecification");

    return (
        <ListWrapper>
            <Column>
                <ListElement label={t("make")} value={vehicleDetails.make} />
                <ListElement label={t("model")} value={vehicleDetails.model} />
                <ListElement
                    label={t("yearProduction")}
                    value={vehicleDetails.production_year}
                />
                <ListElement
                    label={t("mileage")}
                    value={vehicleDetails.mileage?.mileage}
                    valueUnit={vehicleDetails.mileage?.unit}
                />
            </Column>
            <Column>
                <ListElement
                    label={t("capacity")}
                    value={vehicleDetails.engine_capacity}
                    valueUnit="cm3"
                />
                <ListElement
                    label={t("enginePower")}
                    value={vehicleDetails.engine_power}
                    valueUnit="KM"
                />
                <ListElement
                    label={t("numberVin")}
                    value={toUpperCase(vehicleDetails.vin_number)}
                />
                <ListElement
                    label={t("registration")}
                    value={toUpperCase(vehicleDetails.registration_number)}
                />
            </Column>
        </ListWrapper>
    );
};

const ListWrapper = styled.div`
    ${media.tablet`
        display: flex;
    `};
`;

const Column = styled.div`
    ${media.tablet`
        width: 50%;     
    `};
`;

export default VehicleDetailsList;
