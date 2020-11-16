import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
    title: string,
    description: string
}

type Props = OwnProps;

const ListElement: FC<Props> = ({ title, description }) => {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size: ${({theme}) => theme.fontSize.small};
    color: ${({theme}) => theme.color.primaryBlue};
`;

const Description  = styled.div`
    font-size: ${({theme}) => theme.fontSize.small};
    color: ${({theme}) => theme.color.primaryBlue};
    font-weight: ${({theme}) => theme.fontWeight.bold};
`;


export default ListElement;