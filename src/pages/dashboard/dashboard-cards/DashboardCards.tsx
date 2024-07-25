import React from "react";
import { motion } from "framer-motion";
import {
  InfoCircleOutlined,
  UserOutlined,
  RocketOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./dashboardCards.css";

interface Bucket {
  key: string;
  doc_count: number;
  max_price: { value: number };
  min_price: { value: number };
  avg_price: { value: number };
}

interface DashboardData {
  brand_price_comparison: {
    buckets: Bucket[];
  };
}

interface DashboardCardsProps {
  dashboardData: DashboardData;
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ dashboardData }) => {
  const totalBrands =
    dashboardData?.brand_price_comparison?.buckets?.length ?? 0;

  const averageCar = dashboardData?.brand_price_comparison?.buckets?.reduce(
    (prev: Bucket, curr: Bucket) => {
      return prev.avg_price.value > curr.avg_price.value ? prev : curr;
    },
    dashboardData?.brand_price_comparison?.buckets[0]
  );

  const cheapestCar = dashboardData?.brand_price_comparison?.buckets
    ?.filter((car) => car.min_price.value > 0)
    ?.reduce((prev: Bucket, curr: Bucket) => {
      return prev.min_price.value < curr.min_price.value ? prev : curr;
    }, dashboardData?.brand_price_comparison?.buckets[0]);

  const mostExpensiveCar =
    dashboardData?.brand_price_comparison?.buckets?.reduce(
      (prev: Bucket, curr: Bucket) => {
        return prev.max_price.value > curr.max_price.value ? prev : curr;
      },
      dashboardData?.brand_price_comparison?.buckets[0]
    );

  const cardData = [
    {
      icon: <InfoCircleOutlined />,
      title: "Total Car Brands",
      count: totalBrands.toString(),
    },
    {
      icon: <UserOutlined />,
      title: "Average Car Price",
      count: averageCar
        ? `${
            averageCar.key
          } / ${averageCar.avg_price.value.toLocaleString()} TMT`
        : "N/A",
    },
    {
      icon: <RocketOutlined />,
      title: "Cheapest Car",
      count: cheapestCar
        ? `${
            cheapestCar.key
          } / ${cheapestCar.min_price.value.toLocaleString()} TMT`
        : "N/A",
    },
    {
      icon: <SettingOutlined />,
      title: "Most Expensive Car",
      count: mostExpensiveCar
        ? `${
            mostExpensiveCar.key
          } / ${mostExpensiveCar.max_price.value.toLocaleString()} TMT`
        : "N/A",
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
          }}
        >
          <div className="card-icon">{card.icon}</div>
          <div className="card-title">{card.title}</div>
          <div className="card-count">{card.count}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardCards;
