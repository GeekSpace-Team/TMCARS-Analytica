import { FC, useEffect, useState } from "react";
import DashboardCards from "./dashboard-cards/DashboardCards";
import AnnualAverageVehicles from "./annual-avarage-vehicles/AnnualAverageVehicles";
import TopCars from "./top-cars/TopCars";
import styled from "styled-components";
import api from "../../api/axiosConfig";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CardWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 40px 0;
`;

const Dashboard: FC = () => {
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        console.log("Fetching dashboard data...");
        const response = await api.get("/api/get-dashboard");
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <DashboardCards dashboardData={dashboardData} />
      <Divider />
      <Container>
        <CardWrapper>
          <AnnualAverageVehicles dashboardData={dashboardData} />
        </CardWrapper>
        <CardWrapper>
          <TopCars dashboardData={dashboardData} />
        </CardWrapper>
      </Container>
    </div>
  );
};

export default Dashboard;
