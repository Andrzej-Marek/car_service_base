import React, { FC } from "react";
import { media } from "@/shared/utils";
import styled from "styled-components";

interface OwnProps {
    text: string;
    width?: string;
}

type Props = OwnProps;

const PrimaryButton: FC<Props> = ({ text, width }) => {
    return (
        <Wrapper width={width}>
            <div>{text}</div>
        </Wrapper>
    );
};

interface WrapperProps {
    width?: string;
}
// This is just example of work flow
const Wrapper = styled.div<WrapperProps>`
    width: ${({ width }) => width || "100%"};
    padding: 10px 5px;
    background: ${({ theme }) => theme.color.primaryBlue};
    color: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.radius.normal};
    text-align: center;
    transition: 0.4s ease;
    cursor: pointer;

    :hover {
        transform: scale(1.05);
    }

    ${media.tablet`
        padding: 10px 5px;
    `}
`;

export default PrimaryButton;
