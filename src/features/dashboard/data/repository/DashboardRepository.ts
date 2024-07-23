import { DashboardUIEntity } from "../../domain/model/DashboardUIEntity";
import { IDashboardRepository } from "../../domain/repository/IDashboardRepository";
import { DashboardService } from "../api/DashboardService";
import { convertDashboardUIEntity } from "../entity/DashboardApiEntity";

export class DashboardRepository implements IDashboardRepository {
  constructor(private service: DashboardService) {
    this.service = new DashboardService();
  }

  getDashboards = async (): Promise<DashboardUIEntity[]> => {
    const data = await this.service.getDashboards();
    return data.map((dashboard) => convertDashboardUIEntity(dashboard));
  };
}
