// src/components/DashboardCards.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  InfoCircleOutlined,
  UserOutlined,
  RocketOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./dashboardCards.css";

const cardData = [
  { icon: <InfoCircleOutlined />, title: "Umumy ulag modelleri", count: "345" },
  {
    icon: <UserOutlined />,
    title: "Aýyň ortalama iň amatly ulagy",
    count: "Camry-22 / 300000 TMT ",
  },
  {
    icon: <RocketOutlined />,
    title: "Aýyň iň arzan ulagy",
    count: "Lada - 7 / 10,000 TMT",
  },
  {
    icon: <SettingOutlined />,
    title: "Aýyň iň gymmat ulagy",
    count: "BMW - x7 / 1,999,999",
  },
];

const DashboardCards: React.FC = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }} // Additional hover effect using Framer Motion
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
          }} // Staggered delay
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
