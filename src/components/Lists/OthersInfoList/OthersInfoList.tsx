import React, { FC } from "react";
import { media } from "@/shared/utils";
import styled from "styled-components";
import { ListElement } from "../components";


interface OwnProps {}

type Props = OwnProps;

const OthersInfoList: FC<Props> = () => {

    return (
        <ListWrapper>
            <ListElement label="Płatność" value="Gotówka"/>
            <ListElement label="Płatność" value="Gotówka"/>
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
    ${media.tablet`
        display: flex;
    `};
`;

export default OthersInfoList;