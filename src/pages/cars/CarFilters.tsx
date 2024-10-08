import React from "react";
import { Table, Pagination } from "antd";
import { CarFiltersProps } from "../../types/type";
import { PaginationContainer } from "../../style/carFilter";
import { useCarFilters } from "../../hooks/useCarFilters";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Filters from "./Filters";
import ActionButtons from "./ActionButtons";

const CarFilters: React.FC<CarFiltersProps> = ({
  filter,
  onFilter,
  tableData,
  onPaginationChange,
}) => {
  const {
    filters,
    filteredData,
    paginatedData,
    chartRef,
    currentPage,
    pageSize,
    columns,
    handlePaginationChange,
    handleAddItem,
  } = useCarFilters(tableData, onPaginationChange);

  // console.log("Current Page:", currentPage);
  // console.log("Paginated Data:", paginatedData);

  return (
    <>
      <ActionButtons
        chartRef={chartRef}
        filteredData={filteredData}
        onAddItem={handleAddItem}
      />

      <Filters
        tableData={tableData}
        filters={filters}
        handleBrandChange={(brand) => {
          onFilter({
            ...filter,
            brand: brand,
          });
        }}
        handleModelChange={(model) => {
          onFilter({
            ...filter,
            text: model,
          });
        }}
        handleYearChange={(year) => {
          onFilter({
            ...filter,
            min_year: Number(year),
            max_year: Number(year),
          });
        }}
        handleDateRangeChange={(dates) => {
          if (dates) {
            const [startDate, endDate] = dates;
            onFilter({
              ...filter,
              start_date: startDate?.format("YYYY-MM-DD"),
              end_date: endDate?.format("YYYY-MM-DD"),
            });
          }
        }}
        resetFilters={() => {
          onFilter({
            page: 1,
          });
        }}
      />

      <Table
        id="table-id"
        dataSource={paginatedData}
        columns={columns}
        rowKey="key"
        pagination={false}
      />

      <PaginationContainer>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={10000}
          onChange={handlePaginationChange}
        />
      </PaginationContainer>

      <div ref={chartRef} style={{ height: 400, marginTop: 20 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="markasy" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bahasy" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CarFilters;
