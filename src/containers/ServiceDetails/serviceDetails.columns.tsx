import React from "react";
import { TableFooterRowSummary } from "@/components";
import { Currency } from "@/shared/enums";
import { TableColumn, ServiceCostElement } from "@/shared/types";
import { globalTranslation } from "@/shared/utils";

const TRANSLATION_PATH = "serviceCosts:fields";

// TODO: Make mapper to create NET GROSS and VAT INFO OR THINK ABOUT FLOW ON BE
export const serviceDetailsColumns: TableColumn<ServiceCostElement>[] = [
    {
        Header: globalTranslation(`${TRANSLATION_PATH}.lp`),
        accessor: "id",
        styles: {
            width: "40px",
        },
        Cell: (info) => <>{info.cell.row.index + 1}</>,
    },
    {
        Header: globalTranslation(`${TRANSLATION_PATH}.title`),
        accessor: "title",
        styles: {
            minWidth: "200px",
            width: "350px",
        },
        maxWidth: 250,
        Footer: () => <>{globalTranslation(`${TRANSLATION_PATH}.summary`)}:</>,
    },
    {
        Header: globalTranslation(`${TRANSLATION_PATH}.quantity`),
        accessor: "quantity",
        Footer: (info) => <TableFooterRowSummary info={info} valueKey="quantity" />,
    },
    {
        Header: globalTranslation(`${TRANSLATION_PATH}.netPrice`),
        accessor: "price",
        styles: {
            minWidth: "100px",
        },
        Cell: (info) => <>{info.value} PLN</>,
        Footer: (info) => (
            <TableFooterRowSummary info={info} valueKey="priceNet" currency={Currency.PLN} />
        ),
    },
    {
        Header: globalTranslation(`${TRANSLATION_PATH}.grossPrice`),
        styles: {
            minWidth: "100px",
        },
        Cell: (info) => {
            const priceGross = info.row.values.price * 1.23;
            return <>{priceGross} PLN</>;
        },
        Footer: (info) => (
            <TableFooterRowSummary info={info} valueKey="priceGross" currency={Currency.PLN} />
        ),
    },
    {
        Header: globalTranslation(`${TRANSLATION_PATH}.summary`),
        styles: {
            minWidth: "100px",
        },
        Cell: (info: any) => {
            const total = info.row.values.quantity * info.row.values.price;
            return (
                <>
                    {total} {Currency.PLN}
                </>
            );
        },
        Footer: (info) => {
            const total = React.useMemo(
                () =>
                    info.rows.reduce(
                        (sum, row) => row.values.priceGross * row.values.quantity + sum,
                        0
                    ),
                [info.rows]
            );

            return (
                <>
                    {total} {Currency.PLN}
                </>
            );
        },
    },
];
