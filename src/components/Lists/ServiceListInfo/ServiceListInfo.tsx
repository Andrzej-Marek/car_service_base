import React, { FC } from "react";
import { ListElement, ListCompanyDetails } from "../components";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const ServiceListInfo: FC<Props> = () => {
    const { t } = useTranslation("serviceDetails");

    return (
        <Wrapper>
            <ListElement label={t("date")} value="22.02.2020" />
            <ListElement label={t("serviceNumber")} value="01/02/2020" />
            <ListCompanyDetails
                label={t("service")}
                company="EXELO s.c"
                street="ul Pszczyńska 116"
                address="43-254 Warszowice"
            />
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export default ServiceListInfo;
