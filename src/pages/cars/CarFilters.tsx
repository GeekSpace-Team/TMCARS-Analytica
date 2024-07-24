import React from "react";
import { Input, Button, Dropdown, Menu } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  CalendarOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Search } = Input;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const SearchWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const StyledSearch = styled(Search)`
  width: 100%;
  background-color: #fafafa;
  border: none;
  border-radius: 4px;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px; /* Space between elements */
`;

const ActionButton = styled(Button)`
  border: none;
  background: none;
  color: #6c5dd3;
  display: flex;
  align-items: center;
  gap: 8px; /* Space between icon and text */
  &:hover {
    color: #5a4db6;
  }
`;

const CarFilters: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Option 1</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Option 2</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <SearchWrapper>
        <StyledSearch
          placeholder="Ady, markasy, ýyly boýunça gözle..."
          prefix={<SearchOutlined />}
        />
      </SearchWrapper>
      <ActionWrapper>
        <ActionButton icon={<FilterOutlined />}>Filter</ActionButton>
        <ActionButton icon={<CalendarOutlined />}>Calendar</ActionButton>
        <Dropdown overlay={menu} trigger={["click"]}>
          <ActionButton icon={<DownloadOutlined />}>Download</ActionButton>
        </Dropdown>
      </ActionWrapper>
    </Container>
  );
};

export default CarFilters;
