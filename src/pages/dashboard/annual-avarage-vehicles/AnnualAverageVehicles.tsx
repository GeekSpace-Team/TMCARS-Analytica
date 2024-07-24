import React from "react";
import { Menu, Dropdown, Button } from "antd";
import {
  MoreOutlined,
  EyeOutlined,
  ImportOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Card = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 12px 16px -4px rgba(12, 26, 36, 0.04);
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CardTitle = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #081735;
`;

const MenuButton = styled(Button)`
  border: none;
  background: none;
  padding: 0;
  font-size: 16px;
  color: #1e293b;

  &:hover {
    color: #6c5dd3;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8f95b2;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const DeleteItem = styled(StyledMenuItem)`
  color: #ff754c;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns title and chart to the left */
`;

const ChartTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #081735;
  margin-bottom: 20px;
  text-align: left; /* Align title to the left */
`;

const data = [
  { month: "Jan", count: 10 },
  { month: "Feb", count: 25 },
  { month: "Mar", count: 20 },
  { month: "Apr", count: 3 },
  { month: "May", count: 7 },
  { month: "Jun", count: 30 },
  { month: "Jul", count: 5 },
  { month: "Aug", count: 31 },
  { month: "Sep", count: 9 },
  { month: "Oct", count: 13 },
  { month: "Nov", count: 20 },
  { month: "Dec", count: 28 },
];

const AnnualAverageVehicles: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleMenuClick = (e: { key: string }) => {
    console.log("Menu item clicked:", e);
  };

  const menu = (
    <Menu onClick={handleMenuClick} style={{ border: "none" }}>
      <StyledMenuItem key="view" icon={<EyeOutlined />}>
        Doly gormek
      </StyledMenuItem>
      <StyledMenuItem key="save" icon={<ImportOutlined />}>
        Yatda saklat
      </StyledMenuItem>
      <DeleteItem key="delete" icon={<DeleteOutlined />}>
        Pozmak
      </DeleteItem>
    </Menu>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ulaglaryň ýyllyk ortalamasy</CardTitle>
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          visible={visible}
          onVisibleChange={(flag) => setVisible(flag)}
        >
          <MenuButton icon={<MoreOutlined />} />
        </Dropdown>
      </CardHeader>
      <Divider />
      <ChartContainer>
        <ChartTitle>112,340 TMT</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8f95b2" }} />
            <YAxis tick={{ fontSize: 12, fill: "#8f95b2" }} />
            <Tooltip
              content={({ payload }: any) => {
                if (payload && payload.length) {
                  const { value } = payload[0];
                  return (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "5px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <p>{`Count: ${value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="count"
              fill="#4CAF50" // Default color for bars
              radius={[4, 4, 0, 0]} // Rounded corners for bars
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default AnnualAverageVehicles;
