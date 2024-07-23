import { DashboardUIEntity } from "../model/DashboardUIEntity";

export interface IDashboardRepository {
  getDashboards: () => Promise<DashboardUIEntity[]>;
}
