import React, { FC } from "react";
import styled from "styled-components";
import { ListElement } from "../components";

interface OwnProps {}

type Props = OwnProps;

const OtherInformationsList: FC<Props> = () => {
    return (
        <Wrapper>
            <ListWrapper>
                <ListElement value="Gotówka" label="Płatność" />
                <ListElement value="02.10.2021" label="Czas gwarancji" />
            </ListWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const ListWrapper = styled.div`
    display: flex;
`;

export default OtherInformationsList;
