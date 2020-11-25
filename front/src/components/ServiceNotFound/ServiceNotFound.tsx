import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const ServisNotFound: FC<Props> = () => {
    const { t } = useTranslation("notFound");
    return (
        <Wrapper>
            <div>{t("serviceNotFound")}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-size: 32px;
    padding: 20px 0;
    text-align: center;
`;
export default ServisNotFound;
