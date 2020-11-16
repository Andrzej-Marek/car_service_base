import { ListElement, Tile } from "@/components";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {

};

type Props = OwnProps;

const ServiceTiles: FC<Props> = () => {

    return (
        <Wrapper>
            <TileDataCar>
                <Tile title="Dane samochodu">
                    <ListElement title="test" description="test"/>
                </Tile>
            </TileDataCar>

            <TileLastService>
                <Tile title="Ostatni serwis">

                </Tile>
            </TileLastService>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`;

const TileDataCar = styled.div`
    flex-grow: 2;
    padding-right: 35px;
`;

const TileLastService = styled.div`
    flex-grow: 1;
`;

export default ServiceTiles;