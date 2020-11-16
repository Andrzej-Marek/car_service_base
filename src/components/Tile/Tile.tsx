import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
    title?: string
}

type Props = OwnProps;

const Tile: FC<Props> = ({ title, children }) => {

    return (
        <TileWrapper>
            {title && <Title> {title} </Title>}
            {children}
        </TileWrapper>
    )
}

const TileWrapper = styled.div`
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    background-color: ${({theme}) => theme.color.white}; 
`;

const Title = styled.p`
    color: ${({ theme }) => theme.color.primaryBlue};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.big};
    margin: 0px;
`;

export default Tile;