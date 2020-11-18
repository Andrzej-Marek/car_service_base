import React, { FC } from "react";
import styled from "styled-components";
import { media } from "@/shared/utils";

interface OwnProps {}

type Props = OwnProps;

const Grid43: FC<Props> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    display: grid;
    grid-row-gap: 20px;
    padding-top: 20px;

    ${media.laptop`
        display: grid; 
        grid-template-columns: 4fr 3fr;
        grid-column-gap: 15px; 
        padding-top: 15px;
    `}

    ${media.laptopL`
        grid-template-columns: 5fr 3fr;
        grid-column-gap: 25px; 
        padding-top: 25px;
    `}
`;

export default Grid43;
