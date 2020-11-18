import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";
import { ListElement } from "../components";
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const VehicleDetailsList: FC<Props> = () => {
    const { t } = useTranslation("vehicleSpecification");

    return (
        <ListWrapper>
            <Column>
                <ListElement label={t("mark")} value="Mercedes Benz" />
                <ListElement label={t("model")} value="Mercedes Benz" />
                <ListElement
                    label={t("yearProduction")}
                    value="Mercedes Benzadsasdasda dasd asd asd asd ad "
                />
                <ListElement label={t("mileage")} value="Mercedes Benz" />
            </Column>
            <Column>
                <ListElement label={t("capacity")} value="Mercedes Benz" />
                <ListElement label={t("enginePower")} value="Mercedes Benz" />
                <ListElement label={t("numberVin")} value="Mercedes Benz" />
                <ListElement label={t("registration")} value="Mercedes Benz" />
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
