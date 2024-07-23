import { useState } from "react";
import { DashboardUseCase } from "../../domain/usecase/DashboardUseCase";
import { DashboardUIEntity } from "../../domain/model/DashboardUIEntity";

export default function DashboardViewModel(useCase: DashboardUseCase) {
  const [dashboards, setDashboards] = useState<DashboardUIEntity[] | undefined>(
    []
  );

  async function getDashboards() {
    const response = await useCase.getDashboards();
    setDashboards(response);
  }

  return {
    dashboards,
    getDashboards,
  };
}
