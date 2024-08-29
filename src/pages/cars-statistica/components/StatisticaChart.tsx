import { FC } from "react";
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

interface ChartData {
  brand: string;
  avgPriceDifference: number;
}

interface StatisticaChartProps {
  carStats: ChartData[];
}

const StatisticaChart: FC<StatisticaChartProps> = ({ carStats }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      style={{ marginTop: "50px" }}
    >
      <LineChart
        data={carStats}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="brand" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="avgPriceDifference" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatisticaChart;
