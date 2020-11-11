import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const Tile: FC<Props> = () => {

    return (
        <TileWrapper>

        </TileWrapper>
    )

}

const TileWrapper = styled.div`

    background-color: white;
    padding: 30px 20px;

`;


export default Tile;