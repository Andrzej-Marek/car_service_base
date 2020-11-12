import React, { FC } from "react";
import styled from "styled-components";
import { ServiceDetails } from "./containers";
import { GlobalStyle } from "./shared/styles";
import { Container } from './components';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
    return (
        <MainWrapper>
            <GlobalStyle />
            <Container>
                <ServiceDetails/>
            </Container>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    height: 100vh;
    background: ${({theme}) => theme.color.light_gray};
`;


export default App;
