import React, { FC } from "react";
import { TileWrapper } from "@/shared/styles";
import styled from "styled-components";
import { media } from "@/shared/utils";

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
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.color.primaryBlue};
    font-weight: 700;
    padding-bottom: 10px;

    ${media.laptop`
        padding: 0 10px 15px 0;
        font-size: ${({ theme }) => theme.fontSize.large};
    `}
`;

export default ContentTile;
