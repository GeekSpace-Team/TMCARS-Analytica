import { lazy } from "react";

export const Dashboard = lazy(() => import("../../pages/dashboard/Dashboard"));
export const Cars = lazy(() => import("../../pages/cars/Cars"));
export const Users = lazy(() => import("../../pages/users/Users"));
export const Analytica = lazy(() => import("../../pages/analytica/Analytica"));
export const Settings = lazy(() => import("../../pages/settings/Settings"));
export const CarsAnalitica = lazy(
  () => import("../../pages/cars-analitica/CarsAnalitica")
);
