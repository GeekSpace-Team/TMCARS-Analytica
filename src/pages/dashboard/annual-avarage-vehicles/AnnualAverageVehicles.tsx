import React from "react";
import { Menu, Dropdown } from "antd";
import {
  MoreOutlined,
  EyeOutlined,
  ImportOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTitle,
  DeleteItem,
  Divider,
  MenuButton,
  StyledMenuItem,
} from "./annual";

// Define props type
interface AnnualAverageVehiclesProps {
  dashboardData: {
    price_correlation_year?: {
      buckets: Array<{
        key: number;
        doc_count: number;
        price_and_year: {
          value: number;
        };
      }>;
    };
  };
}

const AnnualAverageVehicles: React.FC<AnnualAverageVehiclesProps> = ({
  dashboardData,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleMenuClick = (e: { key: string }) => {
    console.log("Menu item clicked:", e);
  };

  // Menu configuration
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

  // Ensure dashboardData and price_correlation_year exist
  const priceCorrelationData =
    dashboardData?.price_correlation_year?.buckets || [];

  // Transform data for BarChart
  const chartData = priceCorrelationData.map((bucket) => ({
    month: bucket.key.toString(),
    count: bucket.price_and_year.value,
  }));

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
          <BarChart data={chartData}>
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
