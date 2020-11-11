import React, { FC } from "react";
import { PrimaryButton } from "./components";
import { GlobalStyle } from "./shared/styles";
import { Container } from './components';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <>
                    <p>Welcome to my starter!</p>
                    <PrimaryButton text="Hello world" width="150px" />
                </>
            </Container>
        </>
    );
};

export default App;
