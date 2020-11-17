import React, { FC } from "react";
import { CarDetailsList, ContentTile, ServiceListInfo } from "@/components";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {

    const { t } = useTranslation("contentTile");

    return (
        <Wrapper>
            <ContentTile title={t("carData")}>
                <CarDetailsList />
            </ContentTile>
            <ContentTile title={t("service")}>
                <ServiceListInfo/>
            </ContentTile>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px 0;
`;

export default ServiceDetails;
