import React, { useEffect, useState } from "react";
import CarFilters from "./CarFilters";
import { DataFilter, DataType } from "../../types/type";
import api from "../../api/axiosConfig";

const Cars: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<DataFilter>({
    page: 1,
  });

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const fetchData = async (filter: DataFilter) => {
    setIsLoading(true);
    try {
      const response = await api.get(`/api/all-logs`, {
        params: filter,
      });
      const formattedData: DataType[] = response.data.hits.hits.map(
        (item: any) => ({
          key: item._id,
          markasy: item._source.markasy,
          ady: item._source.ady,
          yyly: item._source.yyly,
          bahasy: item._source.bahasy,
          created_at: formatDate(item._source.created_at),
        })
      );
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(filter);
  }, [filter]);

  useEffect(() => {
    setFilter({
      ...filter,
      page: currentPage,
    });
  }, [currentPage]);

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: 20, boxSizing: "border-box" }}>
      <CarFilters
        filter={filter}
        onFilter={(f) => setFilter(f)}
        tableData={data}
        onPaginationChange={handlePaginationChange}
      />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Cars;
