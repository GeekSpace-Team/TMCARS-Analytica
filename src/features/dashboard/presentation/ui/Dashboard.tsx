import React from "react";
import styled from "styled-components";
import DailyCarAdditionsChart from "./DailyCarAdditionsChart";
import MostExpensiveCarsChart from "./MostExpensiveCarsChart";
import CarFilterComponent from "./CarFilterComponent";

const Separator = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
`;

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <DailyCarAdditionsChart />
        <Separator />
        <MostExpensiveCarsChart />
        <Separator />
        <CarFilterComponent />
      </div>
    </div>
  );
};

export default Dashboard;
