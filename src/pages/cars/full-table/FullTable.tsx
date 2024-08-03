import React, { useEffect, useState } from "react";
import axios from "axios";
import CarFilters from "../CarFilters";
import { DataType } from "../../../types/type";

const FullTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://95.85.121.153:3066/api/all-logs?page=1&size=10"
        );
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

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20, boxSizing: "border-box" }}>
      <CarFilters tableData={data} />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default FullTable;
