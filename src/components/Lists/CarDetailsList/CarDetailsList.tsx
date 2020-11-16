import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";
import { ListElement } from "../components";
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const CarDetailsList: FC<Props> = () => {

    const { t } = useTranslation(["tile"]);

    return (
        <ListWrapper>
            <Column>
                <ListElement label={t("tile:carDetails.mark")} value="Mercedes Benz" />
                <ListElement label={t("tile:carDetails.model")} value="Mercedes Benz" />
                <ListElement label={t("tile:carDetails.yearProduction")} value="Mercedes Benz" />
                <ListElement label={t("tile:carDetails.mileage")} value="Mercedes Benz" />
            </Column>
            <Column>
                <ListElement label={t("tile:carDetails.capacity")} value="Mercedes Benz" />
                <ListElement label={t("tile:carDetails.enginePower")} value="Mercedes Benz" />
                <ListElement label={t("tile:carDetails.numberVin")} value="Mercedes Benz" />
                <ListElement label={t("tile:carDetails.registration")} value="Mercedes Benz" />
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
            width: 300px;        
    `};
`;

export default CarDetailsList;
