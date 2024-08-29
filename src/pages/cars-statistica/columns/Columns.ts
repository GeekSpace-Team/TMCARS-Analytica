export const columns = [
  {
    title: "Brand",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Count",
    dataIndex: "doc_count",
    key: "doc_count",
  },
  {
    title: "Max Price",
    dataIndex: ["max_price", "value"],
    key: "max_price",
    render: (value: number) => `${value.toLocaleString()} TMT`,
  },
  {
    title: "Min Price",
    dataIndex: ["min_price", "value"],
    key: "min_price",
    render: (value: number) => `${value.toLocaleString()} TMT`,
  },
  {
    title: "Avg Price",
    dataIndex: ["avg_price", "value"],
    key: "avg_price",
    render: (value: number) => `${Math.round(value).toLocaleString()} TMT`,
  },
  {
    title: "Last Added",
    dataIndex: ["last_addedd", "value_as_string"],
    key: "last_addedd",
    render: (value: string) => value.split("T")[0],
  },
  {
    title: "Min Year",
    dataIndex: ["min_year", "value"],
    key: "min_year",
  },
  {
    title: "Avg Year",
    dataIndex: ["avg_year", "value"],
    key: "avg_year",
    render: (value: number) => Math.round(value),
  },
  {
    title: "Max Year",
    dataIndex: ["max_year", "value"],
    key: "max_year",
  },
];
