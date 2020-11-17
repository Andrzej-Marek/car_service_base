import React, { FC } from "react";
import { ListElement , ListServiceElement } from '../components';
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const ServiceListInfo: FC<Props> = () => {

    const { t } = useTranslation("serviceDetails");

    return (
        <div>
            <ListElement label={t("date")} value="22.02.2020"/>
            <ListElement label={t("serviceNumber")} value="01/02/2020"/>
            <ListServiceElement label={t("service")} company="EXELO s.c" street="ul Pszczyńska 116" address="43-254 Warszowice"/>
        </div>
    )
}

export default ServiceListInfo;