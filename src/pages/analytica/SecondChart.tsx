import { FC } from "react";
import styled from "styled-components";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { InfoCircleOutlined } from "@ant-design/icons";

// Data for the chart
const data = [
  { name: "Jan", uv: 590, pv: 800, amt: 1400 },
  { name: "Feb", uv: 868, pv: 967, amt: 1506 },
  { name: "Mar", uv: 1397, pv: 1098, amt: 989 },
  { name: "Apr", uv: 1480, pv: 1200, amt: 1228 },
  { name: "May", uv: 1520, pv: 1108, amt: 1100 },
  { name: "Jun", uv: 1400, pv: 680, amt: 1700 },
  { name: "Jul", uv: 1590, pv: 740, amt: 1350 },
  { name: "Aug", uv: 1240, pv: 860, amt: 1450 },
  { name: "Sep", uv: 1100, pv: 920, amt: 1400 },
  { name: "Oct", uv: 1300, pv: 980, amt: 1500 },
  { name: "Nov", uv: 1350, pv: 1070, amt: 1550 },
  { name: "Dec", uv: 1600, pv: 1150, amt: 1650 },
];

// Styled components for the chart card
const Card = styled.div`
  width: 50%;
  max-width: 800px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
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

const Value = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 46.88px;
  letter-spacing: -3.75%;
  color: #0b1354;
  margin-top: 4px;
`;

const Description = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: #4f4f4f;
  margin-top: 4px;
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

const ChartSection = styled.div`
  padding: 16px;
`;

// ComposedChart component
const SecondChart: FC = () => {
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
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartSection>
    </Card>
  );
};

export default SecondChart;
