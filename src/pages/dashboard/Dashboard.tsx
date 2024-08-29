import { FC, useEffect, useState } from "react";
import DashboardCards from "./dashboard-cards/DashboardCards";
import AnnualAverageVehicles from "./annual-avarage-vehicles/AnnualAverageVehicles";
import TopCars from "./top-cars/TopCars";
import api from "../../api/axiosConfig";
import { CardWrapper, Divider, Container } from "../../style/dashboardStyle";

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
