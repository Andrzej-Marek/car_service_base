import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const Container: FC<Props> = ({ children }) => {
    return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95vw;
`;

export default Container;
