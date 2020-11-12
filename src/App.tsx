import React, { FC } from "react";
import { PrimaryButton } from "./components";
import { GlobalStyle } from "./shared/styles";
import { Container } from './components';
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
    return (
        <MainWrapper>
            <GlobalStyle />
            <Container>
                <PrimaryButton text="Hello world" width="150px" />
            </Container>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    height: 100vh;
    background: ${({theme}) => theme.color.background};
`;

export default App;
