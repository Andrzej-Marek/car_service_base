import React, { FC } from "react";
import styled from "styled-components";
import { PrimaryButton } from "./components";
import { GlobalStyle } from "./shared/styles";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
    return (
        <>
            <GlobalStyle />
            <ContentWrapper>
                <p>Welcome to my starter!</p>
                <PrimaryButton text="Hello world" width="150px" />
            </ContentWrapper>
        </>
    );
};

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
`;

export default App;
