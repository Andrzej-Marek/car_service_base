import React, { FC } from "react";
import { CarDetailsList, ContentTile, OthersInfoList } from "@/components";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {
    return (
        <Wrapper>
            <ContentTile title="Dane samochodu">
                <CarDetailsList />
            </ContentTile>
            <ContentTile title="Nowa kafelka">
                <div>Hello world</div>
            </ContentTile>
            <ContentTile title="Pozostałe informacje">
                <OthersInfoList/>
            </ContentTile>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px 0;
`;

export default ServiceDetails;
