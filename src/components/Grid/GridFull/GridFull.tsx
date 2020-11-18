import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const GridFull: FC<Props> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    padding-top: 20px;

    ${media.laptop`
        padding-top: 15px;
    `}

    ${media.laptopL`
        padding-top: 25px;
    `}
`;

export default GridFull;
