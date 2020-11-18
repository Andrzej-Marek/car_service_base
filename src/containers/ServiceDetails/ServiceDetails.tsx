import React, { FC } from "react";
import { CarDetailsList, ContentTile, Table, TableFooterRowSummary } from "@/components";
import styled from "styled-components";
import { Currency } from "@/shared/enums";
import { ServiceCost, TableColumn } from "@/shared/types";

interface OwnProps {}

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {
    const data: ServiceCost[] = [
        {
            id: 1,
            title: "Sprzęgło kompresora",
            quantity: 1,
            priceNet: 22,
            priceGross: 3332,
            currency: Currency.PLN,
        },
        {
            id: 2,
            title: "Sprzęgło kompresora2 Sprzęgło kompresora2 Sprzęgło kompresora2",
            quantity: 5,
            priceNet: 42,
            priceGross: 212,
            currency: Currency.PLN,
        },
        {
            id: 3,
            title: "Sprzęgło",
            quantity: 2,
            priceNet: 142,
            priceGross: 4212,
            currency: Currency.PLN,
        },
    ];

    const columns: TableColumn<ServiceCost>[] = [
        {
            Header: "Lp.",
            accessor: "id",
            styles: {
                width: "40px",
            },
            Cell: (info) => <>{info.cell.row.index + 1}</>,
        },
        {
            Header: "Nazwa",
            accessor: "title",
            styles: {
                minWidth: "180px",
                maxWidth: "250px",
            },
            maxWidth: 250,
            Footer: () => <>Podsumowanie:</>,
        },
        {
            Header: "Ilość",
            accessor: "quantity",
            Footer: (info) => <TableFooterRowSummary info={info} valueKey="quantity" />,
        },
        {
            Header: "Cena netto",
            accessor: "priceNet",
            styles: {
                minWidth: "100px",
            },
            Cell: (info) => <>{info.value} PLN</>,
            Footer: (info) => (
                <TableFooterRowSummary
                    info={info}
                    valueKey="priceNet"
                    currency={Currency.PLN}
                />
            ),
        },
        {
            Header: "Cena brutto",
            accessor: "priceGross",
            styles: {
                minWidth: "100px",
            },
            Cell: (info) => <>{info.value} PLN</>,
            Footer: (info) => (
                <TableFooterRowSummary
                    info={info}
                    valueKey="priceGross"
                    currency={Currency.PLN}
                />
            ),
        },
        {
            Header: "Razem",
            styles: {
                minWidth: "100px",
            },
            Cell: (info: any) => {
                const total = info.row.values.quantity * info.row.values.priceGross;
                return (
                    <>
                        {total} {Currency.PLN}
                    </>
                );
            },
            Footer: (info) => {
                const total = info.rows.reduce(
                    (sum, row) => row.values.priceGross * row.values.quantity + sum,
                    0
                );

                return (
                    <>
                        {total} {Currency.PLN}
                    </>
                );
            },
        },
    ];

    return (
        <Wrapper>
            <ContentTile title="Dane samochodu">
                <CarDetailsList />
            </ContentTile>
            <ContentTile title="Nowa kafelka">
                <div>Hello world</div>
            </ContentTile>
            <br />
            <br />
            <br />
            <ContentTile title="Kosztorys">
                <Table columns={columns} data={data} />
            </ContentTile>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px 0;
`;

export default ServiceDetails;
