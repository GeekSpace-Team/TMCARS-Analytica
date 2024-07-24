import { FC } from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { InfoCircleOutlined } from "@ant-design/icons";

// Styled components for the chart card
const Card = styled.div`
  width: 100%;
  max-width: 100%; // Ensure full width
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin: 20px auto;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

const CardHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #828282;
`;

const Value = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
`;

const Description = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;

const ChartSection = styled.div`
  padding: 16px;
  width: 100%; // Ensure full width
`;

// Data for the chart
const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: -3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: -2000, pv: -9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: -1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: -3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const COLORS = ["#8884d8", "#82ca9d"];

const FirstChart: FC = () => {
  return (
    <Card>
      <CardHeader>
        <InfoText>
          <Title>PRIMARY TEXT</Title>
          <Value>5.987,34</Value>
          <Description>Secondary Text</Description>
        </InfoText>
        <InfoCircleOutlined style={{ fontSize: "24px", color: "#4F4F4F" }} />
      </CardHeader>
      <ChartSection>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill={COLORS[0]} />
            <Bar dataKey="uv" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartSection>
    </Card>
  );
};

export default FirstChart;
