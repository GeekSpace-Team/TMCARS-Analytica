import React from "react";
import { AutoComplete, Table, Pagination, DatePicker } from "antd";
import { CarFiltersProps } from "../../types/type";
import {
  Container,
  PaginationContainer,
  ResetButton,
} from "../../style/carFilter";
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
import { getUniqueValues } from "../../hooks/helpers";
import ActionButtons from "./ActionButtons";

const { RangePicker } = DatePicker;

const CarFilters: React.FC<CarFiltersProps> = ({
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
    handleBrandChange,
    handleModelChange,
    handleYearChange,
    handleDateRangeChange,
    resetFilters,
    handleAddItem,
  } = useCarFilters(tableData, onPaginationChange);

  return (
    <>
      <ActionButtons
        chartRef={chartRef}
        filteredData={filteredData}
        onAddItem={handleAddItem}
      />

      <Container>
        <AutoComplete
          style={{ width: 200 }}
          options={getUniqueValues(tableData, "markasy").map((brand) => ({
            value: brand,
          }))}
          placeholder="Select Brand"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().includes(inputValue.toUpperCase())
          }
          onSelect={handleBrandChange}
          value={filters.brand}
        />
        <AutoComplete
          style={{ width: 200, marginLeft: 10 }}
          options={getUniqueValues(
            tableData.filter((item) => item.markasy === filters.brand),
            "ady"
          ).map((model) => ({
            value: model,
          }))}
          placeholder="Select Model"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().includes(inputValue.toUpperCase())
          }
          onSelect={handleModelChange}
          value={filters.model}
          disabled={!filters.brand}
        />
        <AutoComplete
          style={{ width: 200, marginLeft: 10 }}
          options={getUniqueValues(tableData, "yyly").map((year) => ({
            value: year,
          }))}
          placeholder="Select Year"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().includes(inputValue.toUpperCase())
          }
          onSelect={handleYearChange}
          value={filters.year}
        />
        <RangePicker onChange={handleDateRangeChange} />
        <ResetButton onClick={resetFilters}>Reset Filters</ResetButton>
      </Container>

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
          total={1000}
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
