import { Refresh } from "@/shared/icons";
import { media } from "@/shared/utils";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

interface OwnProps {
    loadingText?: string;
}

type Props = OwnProps;

const LoadingPage: FC<Props> = ({ loadingText }) => {
    const { t } = useTranslation("loading");
    return (
        <Wrapper>
            <LoadingContent>
                <IconWrapper>
                    <Refresh />
                </IconWrapper>
                <LoadingText>{loadingText || t("lookingForService")}...</LoadingText>
            </LoadingContent>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: 10vh;
    text-align: center;
`;

const LoadingContent = styled.div``;

const fadeIn = keyframes`
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(-360deg) 
  }
`;

const IconWrapper = styled.div`
    svg {
        animation: 1s infinite ${fadeIn} linear;
        height: 62px;
        width: 62px;
    }

    ${media.tablet`
        svg {
            height: 100px;
            width: 100px;
        }
    `}
`;

const LoadingText = styled.div`
    font-size: 18px;
    padding-top: 10px;

    ${media.tablet`
        font-size: 24px;
        padding-top: 20px;
    `}
`;
export default LoadingPage;
