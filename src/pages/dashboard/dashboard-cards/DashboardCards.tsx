import React from "react";
import { motion } from "framer-motion";
import {
  InfoCircleOutlined,
  UserOutlined,
  RocketOutlined,
  SettingOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import "./dashboardCards.css";
import { Bucket, DashboardCardsProps } from "../../../types/type";

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

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      cardData.map((card) => ({
        Title: card.title,
        Count: card.count,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dashboard Cards");
    XLSX.writeFile(workbook, "Dashboard_Cards.xlsx");
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const tableData = cardData.map((card) => [card.title, card.count]);
    (pdf as any).autoTable({
      head: [["Title", "Count"]],
      body: tableData,
    });
    pdf.save("Dashboard_Cards.pdf");
  };

  return (
    <div>
      <div className="toolbar">
        <div className="toolbar-title">Dashboard Summary</div>
        <div className="download-buttons">
          <Button
            type="primary"
            icon={<FileExcelOutlined />}
            onClick={downloadExcel}
          >
            Download Excel
          </Button>
          <Button
            type="primary"
            icon={<FilePdfOutlined />}
            onClick={downloadPDF}
          >
            Download PDF
          </Button>
        </div>
      </div>
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
    </div>
  );
};

export default DashboardCards;
