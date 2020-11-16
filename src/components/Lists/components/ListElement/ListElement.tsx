import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
    label: string;
    value?: string;
}

type Props = OwnProps;

const ListElement: FC<Props> = ({ children, label, value }) => {
    return (
        <ListElementWrapper>
            <ListKey>{label}:</ListKey>
            <ListValue>{value ? value : children}</ListValue>
        </ListElementWrapper>
    );
};

const ListElementWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    padding-right: 20px;

    ${media.tablet`
        padding-bottom: 15px;
        padding-right: 30px;
    `}
`;

const ListKey = styled.div`
    align-self: flex-start;
    width: 110px;
`;

const ListValue = styled.div`
    font-weight: 700;
`;

export default ListElement;
