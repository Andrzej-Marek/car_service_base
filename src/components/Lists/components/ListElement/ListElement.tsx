import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
    label: string;
    value: string;
}

type Props = OwnProps;

const ListElement: FC<Props> = ({ label, value }) => {
    return (
        <ListElementWrapper>
            <ListKey>{label}:</ListKey>
            <ListValue>{value ?? "-"}</ListValue>
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
    color: ${({ theme }) => theme.color.primaryBlue};
    width: 110px;
    min-width: 110px;
    align-self: flex-start;
`;

const ListValue = styled.div`
    color: ${({ theme }) => theme.color.primaryBlue};
    font-weight: 700;
`;

export default ListElement;
