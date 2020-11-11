import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const TileMain: FC<Props> = ({ children }) => {

    return (
        <TileWrapper>
            {children}
        </TileWrapper>
    )
}

const TileWrapper = styled.div`
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 2px 12px 0px #E5E5E5;
`;


export default TileMain;