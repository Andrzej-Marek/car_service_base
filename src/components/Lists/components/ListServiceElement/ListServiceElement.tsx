import { media } from "@/shared/utils";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
    label: string;
    company: string;
    street: string;
    address: string;
}

type Props = OwnProps;

const ListServiceElement: FC<Props> = ({ label, company, street, address}) => {
    return (
        <ListElementWrapper>
            <ListKey>{label}:</ListKey>
            <div>
                <ListValue>{company}</ListValue>
                <ListValue>{street}</ListValue>
                <ListValue>{address}</ListValue>
            </div>
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
    align-self: flex-start;
    width: 110px;
`;

const ListValue = styled.div`
    color: ${({ theme }) => theme.color.primaryBlue};
    font-weight: 700;
`;

export default ListServiceElement;