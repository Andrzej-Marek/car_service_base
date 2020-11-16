import React, { FC } from "react";
import { GlobalStyle } from "./shared/styles";
import { Container } from "./components";
import styled from "styled-components";
import ServiceDetails from "./containers/ServiceDetails/ServiceDetails";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
    return (
        <MainWrapper>
            <GlobalStyle />
            <Container>
                <ServiceDetails />
            </Container>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    height: 100vh;
    background: ${({ theme }) => theme.color.background};
`;

export default App;
