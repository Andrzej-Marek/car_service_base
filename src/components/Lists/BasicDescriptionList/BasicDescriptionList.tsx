import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
    description: string
}

type Props = OwnProps;

const BasicDescriptionList: FC<Props> = ({description}) => {

    return (
        <Wrapper>
            {description}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: ${({theme}) => theme.color.primaryBlue};
    margin-top: 30px;
`;

export default BasicDescriptionList;