import { FC } from "react";
import { CarStatistics } from "../interface/statisticaInterface";
import { columns } from "../columns/Columns";
import { StyledTable } from "../style/staticticStyle";

interface StatisticaTableProps {
  carStats: CarStatistics[];
}

const StatisticaTable: FC<StatisticaTableProps> = ({ carStats }) => {
  return (
    <StyledTable
      id="statistics-table"
      columns={columns}
      dataSource={carStats}
      rowKey="key"
      pagination={false}
    />
  );
};

export default StatisticaTable;
