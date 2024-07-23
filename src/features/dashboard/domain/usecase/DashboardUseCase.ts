import { DashboardUIEntity } from "../model/DashboardUIEntity";
import { IDashboardRepository } from "../repository/IDashboardRepository";

export class DashboardUseCase {
  constructor(private repo: IDashboardRepository) {}
  getDashboards(): Promise<DashboardUIEntity[]> {
    return this.repo.getDashboards();
  }
}
