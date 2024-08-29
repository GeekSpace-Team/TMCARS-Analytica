import { FC } from "react";
import StatisticaTable from "../components/StatisticaTable";
import StatisticsHeader from "../components/StatisticsHeader";
import DownArrow from "../components/DownArrow";
import useFetch from "../hooks/useFetch";
import { CarStatistics } from "../interface/statisticaInterface";

const CarsStatistica: FC = () => {
  const {
    data: carStats,
    loading,
    error,
  } = useFetch<CarStatistics[]>("http://95.85.121.153:3066/api/get-cars");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  return (
    <div>
      <StatisticsHeader />
      <StatisticaTable carStats={carStats || []} />
      <DownArrow />
    </div>
  );
};

export default CarsStatistica;
