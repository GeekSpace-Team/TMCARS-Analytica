import { DashboardUIEntity } from "../../domain/model/DashboardUIEntity";

export interface DashboardApiEntity {
  count: number;
  name: string;
  date: string;
  car_id: string;
}

const convertDashboardUIEntity = (
  entity: DashboardApiEntity
): DashboardUIEntity => {
  return {
    count: entity.count,
    name: entity.name,
    date: entity.date,
    car_id: entity.car_id,
  };
};

export { convertDashboardUIEntity };
