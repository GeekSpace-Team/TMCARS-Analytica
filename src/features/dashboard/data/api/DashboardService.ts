import { DashboardApiEntity } from "../entity/DashboardApiEntity";
import DashboardApi from "./DashboardApi";

export class DashboardService {
  async getDashboards(): Promise<DashboardApiEntity[]> {
    const dashboard = await DashboardApi.get<DashboardApiEntity[]>(
      "/api/get-dashboard"
    );
    return dashboard.data;
  }
}
