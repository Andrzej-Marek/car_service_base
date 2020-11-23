import { OtherServiceInformations } from "@/shared/types";
import { TimeMachine } from "@/shared/utils";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ListElement } from "../components";

interface OwnProps {
    otherInformations: OtherServiceInformations;
}

type Props = OwnProps;

const OtherInformationsList: FC<Props> = ({ otherInformations }) => {
    const { t } = useTranslation(["otherServiceInformations", "paymentMethods"]);
    return (
        <Wrapper>
            <ListWrapper>
                {otherInformations.payment_method && (
                    <ListElement
                        value={t(`paymentMethods:${otherInformations.payment_method}`)}
                        label={t("paymentMethod")}
                    />
                )}
                {otherInformations.warranty_time && (
                    <ListElement
                        value={TimeMachine.formatToCalendarDate(
                            otherInformations.warranty_time
                        )}
                        label={t("warrantyTime")}
                    />
                )}
            </ListWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default OtherInformationsList;
