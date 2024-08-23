import { useState, useEffect, useRef, useMemo } from "react";
import dayjs, { Dayjs } from "dayjs";

export const useCarFilters = (
  tableData: any[],
  onPaginationChange: (page: number, pageSize: number) => void
) => {
  const [filters, setFilters] = useState({
    brand: null as string | null,
    model: null as string | null,
    year: null as string | null,
    startDate: null as Dayjs | null,
    endDate: null as Dayjs | null,
  });

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

  const [filteredData, setFilteredData] = useState(tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const chartRef = useRef<HTMLDivElement>(null);
  const [paginatedData, setPaginatedData] = useState(
    filteredData.slice(0, pageSize)
  );

  useEffect(() => {
    const { brand, model, year, startDate, endDate } = filters;
    console.log(tableData, "tableDta");
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
  }, [filters, tableData, currentPage, pageSize]);

  useEffect(() => {
    setPaginatedData(filteredData);
  }, [filteredData, currentPage, pageSize]);

  useEffect(() => {
    onPaginationChange(currentPage, pageSize);
  }, [currentPage, pageSize, onPaginationChange]);

  const handlePaginationChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
    onPaginationChange(page, pageSize);
  };

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
      setFilters((prev) => ({
        ...prev,
        startDate,
        endDate,
      }));
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
    setCurrentPage(1);
  };

  const handleAddItem = () => {
    console.log("Add item clicked");
  };

  return {
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
  };
};
