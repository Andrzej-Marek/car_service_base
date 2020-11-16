import React, { FC } from "react";
import { TileWrapper } from "@/shared/styles";
import styled from "styled-components";

interface OwnProps {
    title: string;
}

type Props = OwnProps;

const ContentTile: FC<Props> = ({ title, children }) => {
    return (
        <StyledTileWrapper>
            <Title>{title}</Title>
            {children}
        </StyledTileWrapper>
    );
};

const StyledTileWrapper = styled(TileWrapper)`
    padding: 10px 15px;
`;

const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.tileTitle};
    color: ${({ theme }) => theme.color.primaryBlue};
    font-weight: 700;
    padding-bottom: 10px;
`;

export default ContentTile;
