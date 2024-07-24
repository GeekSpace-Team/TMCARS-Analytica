import { FC } from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer, LabelProps } from "recharts";
import { InfoCircleOutlined } from "@ant-design/icons";

// Styled components for the chart card
const Card = styled.div`
  width: 50%;
  max-width: 800px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  flex: 1;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 18.75px;
  color: #828282;
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

const Separator = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const ChartSection = styled.div`
  display: flex;
  padding: 16px;
  height: auto;
  align-items: center;
`;

const ChartContainer = styled.div`
  height: 200px;
  flex: 3;
`;

const InfoSection = styled.div`
  flex: 1;
  padding: 0 16px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductColor = styled.div<{ color: string }>`
  width: 24.47px;
  height: 8.96px;
  background-color: ${({ color }) => color};
  margin-right: 8px;
`;

const ProductText = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.52px;
  color: #4f4f4f;
`;

// Data for the chart
const data = [
  { name: "Product 1", value: 400 },
  { name: "Product 2", value: 300 },
  { name: "Product 3", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;

interface CustomizedLabelProps extends LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ThirdChart: FC = () => {
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
      <Separator />
      <ChartSection>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <InfoSection>
          {data.map((entry, index) => (
            <ProductInfo key={index}>
              <ProductColor color={COLORS[index % COLORS.length]} />
              <ProductText>{entry.name}</ProductText>
            </ProductInfo>
          ))}
        </InfoSection>
      </ChartSection>
    </Card>
  );
};

export default ThirdChart;
