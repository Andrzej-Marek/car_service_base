import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";
import { ListElement } from "../components";

interface OwnProps {}

type Props = OwnProps;

const CarDetailsList: FC<Props> = () => {
    return (
        <ListWrapper>
            <Column>
                <ListElement label="Marka" value="Mercedes Benz" />
                <ListElement label="Model" value="Mercedes Benz" />
                <ListElement label="Rok produkcji" value="Mercedes Benz" />
                <ListElement label="Przebieg" value="Mercedes Benz" />
            </Column>
            <Column>
                <ListElement label="Pojemność" value="Mercedes Benz" />
                <ListElement label="Moc" value="Mercedes Benz" />
                <ListElement label="Numer VIN" value="Mercedes Benz" />
                <ListElement label="Rejestracja" value="Mercedes Benz" />
            </Column>
        </ListWrapper>
    );
};

const ListWrapper = styled.div`
    ${media.tablet`
        display: flex;
    `};
`;

const Column = styled.div`
    ${media.tablet`
            width: 300px;        
    `};
`;

export default CarDetailsList;
