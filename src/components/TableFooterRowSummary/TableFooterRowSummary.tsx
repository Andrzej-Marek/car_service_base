import { Currency } from "@/shared/enums";
import React, { FC } from "react";

interface OwnProps {
    valueKey: string;
    info: any;
    currency?: Currency;
}

type Props = OwnProps;

const TableFooterRowSummary: FC<Props> = ({ info, valueKey, currency }) => {
    // @ts-ignoree
    const total = info.rows.reduce((sum, row) => row.values[valueKey] + sum, 0);
    return (
        <>
            {total} {currency && currency}
        </>
    );
};
export default React.memo(TableFooterRowSummary);
