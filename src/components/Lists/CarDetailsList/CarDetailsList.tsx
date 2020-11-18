import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";
import { ListElement } from "../components";
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const CarDetailsList: FC<Props> = () => {

    const { t } = useTranslation("carSpecification");

    return (
        <ListWrapper>
            <Column>
                <ListElement label={t("carDetails.mark")} value="Mercedes Benz" />
                <ListElement label={t("carDetails.model")} value="Mercedes Benz" />
                <ListElement label={t("carDetails.yearProduction")} value="Mercedes Benz" />
                <ListElement label={t("carDetails.mileage")} value="Mercedes Benz" />
            </Column>
            <Column>
                <ListElement label={t("carDetails.capacity")} value="Mercedes Benz" />
                <ListElement label={t("carDetails.enginePower")} value="Mercedes Benz" />
                <ListElement label={t("carDetails.numberVin")} value="Mercedes Benz" />
                <ListElement label={t("carDetails.registration")} value="Mercedes Benz" />
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
