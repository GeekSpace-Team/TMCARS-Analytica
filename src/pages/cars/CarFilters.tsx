import React, { useState, useEffect, useMemo } from "react";
import { Dropdown, Menu, DatePicker, AutoComplete, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import dayjs, { Dayjs } from "dayjs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ActionButton,
  ActionWrapper,
  Container,
  ResetButton,
} from "./carFilter";
import { CarFiltersProps } from "../../types/type";

const { RangePicker } = DatePicker;

const CarFilters: React.FC<CarFiltersProps> = ({ tableData }) => {
  const [filters, setFilters] = useState({
    brand: null as string | null,
    model: null as string | null,
    year: null as string | null,
    startDate: null as Dayjs | null,
    endDate: null as Dayjs | null,
  });

  const [filteredData, setFilteredData] = useState(tableData);

  useEffect(() => {
    const { brand, model, year, startDate, endDate } = filters;
    const filtered = tableData.filter((item) => {
      const itemDate = dayjs(item.created_at);
      return (
        (!brand || item.markasy === brand) &&
        (!model || item.ady === model) &&
        (!year || item.yyly === year) &&
        (!startDate ||
          !endDate ||
          (itemDate.isAfter(startDate) && itemDate.isBefore(endDate)))
      );
    });
    setFilteredData(filtered);
  }, [filters, tableData]);

  const handleBrandChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      brand: value,
      model: null,
      year: null,
    }));
  };

  const handleModelChange = (value: string) => {
    setFilters((prev) => ({ ...prev, model: value, year: null }));
  };

  const handleYearChange = (value: string) => {
    setFilters((prev) => ({ ...prev, year: value }));
  };

  const handleDateRangeChange = (
    dates: [Dayjs | null, Dayjs | null] | null
  ) => {
    if (dates) {
      const [startDate, endDate] = dates;
      console.log(
        "Start Date:",
        startDate ? startDate.format("YYYY-MM-DD") : null
      );
      console.log("End Date:", endDate ? endDate.format("YYYY-MM-DD") : null);
    }
  };

  const resetFilters = () => {
    setFilters({
      brand: null,
      model: null,
      year: null,
      startDate: null,
      endDate: null,
    });
  };

  const downloadFile = (fileType: "pdf" | "excel") => {
    const downloadMethods: {
      [key in "pdf" | "excel"]: () => void;
    } = {
      pdf: downloadPDF,
      excel: downloadExcel,
    };
    downloadMethods[fileType]();
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const headers = [["Brand", "Model", "Year", "Price", "Created Date"]];
    const data = filteredData.map((row) => [
      row.markasy,
      row.ady,
      row.yyly,
      row.bahasy,
      row.created_at,
    ]);
    (doc as any).autoTable({ head: headers, body: data });
    doc.save("table.pdf");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
    XLSX.writeFile(workbook, "table.xlsx");
  };

  const columns = useMemo(
    () => [
      { title: "Brand", dataIndex: "markasy", key: "brand" },
      { title: "Model", dataIndex: "ady", key: "model" },
      { title: "Year", dataIndex: "yyly", key: "year" },
      { title: "Price", dataIndex: "bahasy", key: "price" },
      {
        title: "Created Date",
        dataIndex: "created_at",
        key: "created_at",
      },
    ],
    []
  );

  const menu = (
    <Menu onClick={(e) => downloadFile(e.key as "pdf" | "excel")}>
      <Menu.Item key="pdf">PDF</Menu.Item>
      <Menu.Item key="excel">Excel</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Container>
        <AutoComplete
          style={{ width: 200 }}
          options={tableData.map((item) => ({
            value: item.markasy,
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
          options={tableData
            .filter((item) => item.markasy === filters.brand)
            .map((item) => ({
              value: item.ady,
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
          options={tableData
            .filter(
              (item) =>
                item.markasy === filters.brand && item.ady === filters.model
            )
            .map((item) => ({
              value: item.yyly,
            }))}
          placeholder="Select Year"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().includes(inputValue.toUpperCase())
          }
          onSelect={handleYearChange}
          value={filters.year}
          disabled={!filters.model}
        />
        <ActionWrapper>
          <RangePicker onChange={handleDateRangeChange} />
          <Dropdown overlay={menu} trigger={["click"]}>
            <ActionButton icon={<DownloadOutlined />}>Download</ActionButton>
          </Dropdown>
        </ActionWrapper>
      </Container>
      <ResetButton onClick={resetFilters}>Reset Filters</ResetButton>

      <Table
        id="table-id"
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
      />

      {/* Chart Displaying Table Data */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ady" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="bahasy"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default CarFilters;
