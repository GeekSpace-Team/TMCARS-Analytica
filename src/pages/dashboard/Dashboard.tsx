// src/components/Dashboard.tsx
import { FC } from "react";
import DashboardCards from "./dashboard-cards/DashboardCards";
import AnnualAverageVehicles from "./annual-avarage-vehicles/AnnualAverageVehicles";
import TopCars from "./top-cars/TopCars";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; // Space between components

  @media (min-width: 768px) {
    // Medium screens and up
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    // Large screens and up
    flex-direction: row;
  }
`;

const CardWrapper = styled.div`
  flex: 1;
  min-width: 300px; // Minimum width for the components to fit well
  margin: 10px; // Margin around each card
`;

const Dashboard: FC = () => {
  return (
    <div>
      <DashboardCards />

      <Container>
        <CardWrapper>
          <AnnualAverageVehicles />
        </CardWrapper>
        <CardWrapper>
          <TopCars />
        </CardWrapper>
      </Container>
    </div>
  );
};

export default Dashboard;
