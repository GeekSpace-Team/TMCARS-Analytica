// src/components/TabsHeader.tsx
import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import FullTable from "./full-table/FullTable";
import MonthlyTable from "./monthly-table/MonthlyTable";
import WeeklyTable from "./weekly-table/WeeklyTable";
import DailyTable from "./daily-table/DailyTable";

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    background-color: #fff;
    width: 100%;
    margin: 0; /* Ensure no extra margins */
  }
  .ant-tabs-tab {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #718096;
    margin: 0; /* Ensure no extra margins */
  }
  .ant-tabs-tab-active {
    font-weight: 700;
    color: #6c5dd3;
  }
  .ant-tabs-tab-btn {
    margin: 0; /* Ensure no extra margins */
  }
`;

const TabsHeader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Ensure vertical stacking
        width: "100%",
        position: "relative",
        background: "#fff",
        padding: "20px", // Use padding for spacing
        boxSizing: "border-box", // Ensure padding is included in width calculations
        marginTop: "50px",
      }}
    >
      <StyledTabs defaultActiveKey="1">
        <TabPane tab="Full Table" key="1">
          <FullTable />
        </TabPane>
        <TabPane tab="Monthly Table" key="2">
          <MonthlyTable />
        </TabPane>
        <TabPane tab="Weekly Table" key="3">
          <WeeklyTable />
        </TabPane>
        <TabPane tab="Daily Table" key="4">
          <DailyTable />
        </TabPane>
      </StyledTabs>
    </div>
  );
};

export default TabsHeader;
