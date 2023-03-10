import React from "react";
import { useTranslation, TFunction } from "next-i18next";
import { RightCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ColumnProps } from "antd/lib/table";
import Link from "next/link";

import { PageTitle } from "../MainWrapper/PageTitle";
import { PaginatedTable } from "../PaginatedTable/PaginatedTable";
import { CustomerDetailsFragment } from "../DetailCustomer/__generated__/queries.generated";

import {
  CustomerFragmentFragment,
  useGetAllCustomersQuery,
} from "./__generated__/queries.generated";

const PAGE_SIZE = 10;

const getColumns = (t: TFunction): ColumnProps<CustomerDetailsFragment>[] => [
  {
    title: t("Company name") as string,
    ellipsis: true,
    dataIndex: "name",
    render: (_, record) => {
      return <Link href={`/customers/${record.id}`}>{record.name}</Link>;
    },
  },
  {
    title: t("Identification number") as string,
    width: 150,
    ellipsis: true,
    dataIndex: "identificationNumber",
  },
  {
    title: t("Contact person name") as string,
    width: 250,
    ellipsis: true,
    dataIndex: "personName",
  },
  {
    title: t("Email") as string,
    width: 150,
    ellipsis: true,
    dataIndex: "email",
  },
  {
    title: t("Phone") as string,
    width: 150,
    ellipsis: true,
    dataIndex: "phone",
  },
  {
    key: "actions",
    width: 50,
    render: (_, record) => {
      return (
        <Link href={`/customers/${record.id}`}>
          <Button icon={<RightCircleOutlined />} type="link"></Button>
        </Link>
      );
    },
  },
];

export const ListCustomers: React.FC = () => {
  const { t } = useTranslation();

  const { data, loading, fetchMore, refetch } = useGetAllCustomersQuery({
    variables: { first: PAGE_SIZE },
    fetchPolicy: "cache-and-network",
  });

  const searchHandler = (searchValue: string) => {
    refetch({ first: PAGE_SIZE, search: searchValue });
  };

  const paginationChangedHandler = (newPageNumber: number) => {
    fetchMore({
      variables: { first: PAGE_SIZE, skip: (newPageNumber - 1) * PAGE_SIZE },
      updateQuery: (_, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          throw new Error("Failed to load more");
        }
        return fetchMoreResult;
      },
    });
  };

  const items = (data?.getAllCustomers?.items ?? []).filter(
    (item): item is CustomerFragmentFragment => item !== null
  );

  return (
    <>
      <PageTitle>{t("Customers")}</PageTitle>
      <PaginatedTable<CustomerFragmentFragment>
        pageSize={PAGE_SIZE}
        columns={getColumns(t)}
        records={items}
        totalCount={data?.getAllCustomers?.totalCount ?? 0}
        onPaginationChange={paginationChangedHandler}
        onSearch={searchHandler}
        loading={loading}
        translations={{
          emptyResult: t("Customers list is empty"),
          search: t("Search customers"),
        }}
      />
    </>
  );
};
