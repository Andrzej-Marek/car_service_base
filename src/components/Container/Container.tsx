import React, { FC } from "react";
import { media } from "@/shared/utils";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const Container: FC<Props> = ({ children }) => {

    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}

const ContainerWrapper = styled.div`
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;

    ${media.laptop`
        width: 85vw;
    `}

    ${media.laptopL`
        width: 75vw;
    `}
`;

export default Container;