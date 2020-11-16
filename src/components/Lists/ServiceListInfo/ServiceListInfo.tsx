import React, { FC } from "react";
import styled from "styled-components";
import { ListElement } from '../components';
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const ServiceListInfo: FC<Props> = () => {

    const { t } = useTranslation("serviceDetails");

    return (
        <div>
            <ListElement label={t("serviceDetails:serviceDetails.date")} value="22.02.2020"/>
            <ListElement label={t("serviceDetails:serviceDetails.serviceNumber")} value="01/02/2020"/>
            <ListElement label={t("serviceDetails:serviceDetails.service")}>
                <Text>EXELO s.c</Text>
                <Text>ul Pszczyńska 16</Text>
                <Text>43-254 Warszowice</Text>
            </ListElement>

        </div>
    )
}

const Text = styled.p`
    margin: 0;
`

export default ServiceListInfo;