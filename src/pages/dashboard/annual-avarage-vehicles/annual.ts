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
  align-items: center;
  margin-bottom: 20px;
`;

export const CardTitle = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #081735;
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
  flex-direction: column;
  align-items: flex-start; /* Aligns title and chart to the left */
`;

export const ChartTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #081735;
  margin-bottom: 20px;
  text-align: left; /* Align title to the left */
`;
