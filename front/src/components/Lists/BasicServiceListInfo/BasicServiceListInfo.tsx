import React, { FC } from "react";
import { ListElement, ListCompanyDetails } from "../components";
import { useTranslation } from "react-i18next";
import { Company } from "@/shared/types";
import { TimeMachine } from "@/shared/utils";

interface OwnProps {
    company: Company;
    serviceDate: Date;
}

type Props = OwnProps;

const BasicServiceListInfo: FC<Props> = ({ company, serviceDate }) => {
    const { t } = useTranslation("serviceDetails");

    const companyStreetAdress = company && `ul. ${company.street} ${company.street_number}`;
    const companyCityAdress = company && `${company.postal_code} ${company.city}`;
    return (
        <>
            <ListElement
                label={t("date")}
                value={TimeMachine.formatToCalendarDate(serviceDate)}
            />
            {company && (
                <ListCompanyDetails
                    label={t("service")}
                    company={company.company_name}
                    street={companyStreetAdress}
                    address={companyCityAdress}
                />
            )}
        </>
    );
};

export default BasicServiceListInfo;
