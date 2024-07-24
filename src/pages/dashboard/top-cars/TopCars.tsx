import React from "react";
import { Menu, Dropdown, Button } from "antd";
import {
  MoreOutlined,
  EyeOutlined,
  ImportOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

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
  margin-bottom: 20px;
`;

const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #081735;
`;

const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8f95b2;
  margin: 5px 0 0 0; // Adjust margin as needed
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
  flex-direction: row;
  align-items: flex-start;
  gap: 20px; // Adjust gap as needed
`;

const ChartWrapper = styled.div`
  flex: 3;
`;

const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px; // Set max height to limit the visible area
  overflow-y: auto; // Enable vertical scrolling
  overflow-x: hidden; // Hide horizontal scrollbar
  scrollbar-width: none; // Hide scrollbar for Firefox
  -ms-overflow-style: none; // Hide scrollbar for Internet Explorer and Edge

  ::-webkit-scrollbar {
    display: none; // Hide scrollbar for WebKit browsers
  }
`;

const CarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CarAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: #e0e0e0;
  border-radius: 50%;
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarName = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8f95b2;
`;

const CarCost = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #081735;
`;

const ChartTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #081735;
  margin-bottom: 20px;
  text-align: left;
`;

const data = [
  { name: "Toyota", value: 400 },
  { name: "Ford", value: 300 },
  { name: "BMW", value: 300 },
  { name: "Mercedes", value: 200 },
  { name: "Audi", value: 100 },
  { name: "Chevrolet", value: 180 },
  { name: "Nissan", value: 150 },
  { name: "Hyundai", value: 130 },
  { name: "Kia", value: 120 },
  { name: "Volkswagen", value: 110 },
];

const TopCars: React.FC = () => {
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
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                innerRadius={40}
                fill="#8884d8" // Default color for all slices
                label
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill="#8884d8" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
        <DetailsWrapper>
          {data.map((car) => (
            <CarItem key={car.name}>
              <CarAvatar />
              <CarInfo>
                <CarCost>{car.value} TMT</CarCost>
                <CarName>{car.name}</CarName>
              </CarInfo>
            </CarItem>
          ))}
        </DetailsWrapper>
      </ChartContainer>
    </Card>
  );
};

export default TopCars;
