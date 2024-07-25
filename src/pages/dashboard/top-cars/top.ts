import { Button, Menu } from "antd";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 12px 16px -4px rgba(12, 26, 36, 0.04);
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #081735;
`;

export const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8f95b2;
  margin: 5px 0 0 0; // Adjust margin as needed
`;

export const MenuButton = styled(Button)`
  border: none;
  background: none;
  padding: 0;
  font-size: 16px;
  color: #1e293b;

  &:hover {
    color: #6c5dd3;
  }
`;

export const StyledMenuItem = styled(Menu.Item)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8f95b2;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const DeleteItem = styled(StyledMenuItem)`
  color: #ff754c;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px; // Adjust gap as needed
`;

export const ChartWrapper = styled.div`
  flex: 3;
`;

export const DetailsWrapper = styled.div`
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

export const CarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CarAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: #e0e0e0;
  border-radius: 50%;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarName = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8f95b2;
`;

export const CarCost = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #081735;
`;

export const ChartTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #081735;
  margin-bottom: 20px;
  text-align: left;
`;
