import { lazy } from "react";

export const Dashboard = lazy(() => import("../../pages/dashboard/Dashboard"));
export const Cars = lazy(() => import("../../pages/cars/Cars"));
export const CarsStatistica = lazy(
  () => import("../../pages/cars-statistica/presentation/CarsStatistica")
);
