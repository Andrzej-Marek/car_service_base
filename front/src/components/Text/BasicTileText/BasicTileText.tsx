import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
    text: string;
}

type Props = OwnProps;

const BasicTileText: FC<Props> = ({ text }) => {
    return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.div`
    line-height: 22px;
    color: ${({ theme }) => theme.color.primaryBlue};
    padding-bottom: 10px;
    max-height: 200px;
    overflow-y: auto;
`;

export default BasicTileText;
