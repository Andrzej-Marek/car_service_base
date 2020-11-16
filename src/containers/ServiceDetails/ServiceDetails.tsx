import React, { FC } from "react";
import { CarDetailsList, ContentTile } from "@/components";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {

    const { t } = useTranslation(["tile"]);

    return (
        <Wrapper>
            <ContentTile title={t("tile:carDetails.title")}>
                <CarDetailsList />
            </ContentTile>
            <ContentTile title="Nowa kafelka">
                <div>Hello world</div>
            </ContentTile>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px 0;
`;

export default ServiceDetails;
