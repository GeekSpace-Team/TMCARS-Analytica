import React, { useEffect } from "react";
import { Menu, Dropdown } from "antd";
import {
  MoreOutlined,
  EyeOutlined,
  ImportOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import {
  CarCost,
  Card,
  CardHeader,
  CardTitle,
  CarInfo,
  CarItem,
  CarName,
  ChartContainer,
  ChartTitle,
  ChartWrapper,
  DeleteItem,
  DetailsWrapper,
  Divider,
  HeaderTexts,
  MenuButton,
  StyledMenuItem,
  Subtitle,
} from "./top";

// Define the types for the car and dashboard data
interface CarData {
  _source: {
    markasy: string;
    ady: string;
    yyly: string;
    bahasy: number;
  };
}

interface DashboardData {
  top: CarData[];
}

interface TopCarsProps {
  dashboardData: DashboardData;
}

const TopCars: React.FC<TopCarsProps> = ({ dashboardData }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  useEffect(() => {
    if (dashboardData && dashboardData.top) {
      // Log max_price to the console
      const prices = dashboardData.top.map((car) => car._source.bahasy);
      const maxPrice = Math.max(...prices);
      console.log("Max Price:", maxPrice);
    } else {
      console.log("Dashboard data or top field is undefined");
    }
  }, [dashboardData]);

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

  // Ensure dashboardData is valid and contains top field
  if (!dashboardData || !dashboardData.top) {
    return <div>Error: Dashboard data is not available</div>;
  }

  // Prepare data for PieChart
  const chartData = dashboardData.top.map((car: CarData) => ({
    name: `${car._source.markasy} ${car._source.ady} ${car._source.yyly}`,
    value: car._source.bahasy || 0,
  }));

  return (
    <Card>
      <CardHeader>
        <HeaderTexts>
          <CardTitle>Ulaglar TOP-10</CardTitle>
          <Subtitle>Ulaglar boýunça gysgaça hasabat</Subtitle>
        </HeaderTexts>
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
        <ChartWrapper>
          <ChartTitle>Market Share</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                innerRadius={40}
                fill="#8884d8"
                label
              >
                {chartData.map((_, index: number) => (
                  <Cell key={`cell-${index}`} fill="#8884d8" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
        <DetailsWrapper>
          {chartData.map((car, index: number) => (
            <CarItem key={index}>
              <CarInfo>
                <CarCost>{car.value} TMT</CarCost>
                <CarName>{car.name}</CarName>
                <hr />
              </CarInfo>
            </CarItem>
          ))}
        </DetailsWrapper>
      </ChartContainer>
    </Card>
  );
};

export default TopCars;
