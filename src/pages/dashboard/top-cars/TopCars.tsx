import React, { useEffect } from "react";
import { Menu, Dropdown } from "antd";
import {
  MoreOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import {
  CarCost,
  Card,
  CardHeader,
  CardTitle,
  CarInfo,
  CarItem,
  CarName,
  ChartContainer,
  ChartTitle,
  ChartWrapper,
  DetailsWrapper,
  Divider,
  HeaderTexts,
  MenuButton,
  StyledMenuItem,
  Subtitle,
} from "./top";
import { CarData, TopCarsProps } from "../../../types/type";

const TopCars: React.FC<TopCarsProps> = ({ dashboardData }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  useEffect(() => {
    if (dashboardData && dashboardData.top) {
      // Log max_price to the console
      const prices = dashboardData.top.map((car) => car._source.bahasy);
      const maxPrice = Math.max(...prices);
      console.log("Max Price:", maxPrice);
    } else {
      console.log("Dashboard data or top field is undefined");
    }
  }, [dashboardData]);

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "excel") {
      downloadExcel();
    } else if (e.key === "pdf") {
      downloadPDF();
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      dashboardData.top.map((car: CarData) => ({
        Name: `${car._source.markasy} ${car._source.ady} ${car._source.yyly}`,
        Price: car._source.bahasy || 0,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Top Cars");
    XLSX.writeFile(workbook, "Top_Cars.xlsx");
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF();
    const tableData = dashboardData.top.map((car: CarData) => [
      `${car._source.markasy} ${car._source.ady} ${car._source.yyly}`,
      car._source.bahasy || 0,
    ]);
    (pdf as any).autoTable({
      head: [["Car", "Price"]],
      body: tableData,
    });
    const canvas = await html2canvas(
      document.querySelector("#chart-container") as HTMLElement
    );
    const imgData = canvas.toDataURL("image/png");
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 100);
    pdf.save("Top_Cars.pdf");
  };

  const menu = (
    <Menu onClick={handleMenuClick} style={{ border: "none" }}>
      <StyledMenuItem key="excel" icon={<FileExcelOutlined />}>
        Download Excel
      </StyledMenuItem>
      <StyledMenuItem key="pdf" icon={<FilePdfOutlined />}>
        Download PDF
      </StyledMenuItem>
    </Menu>
  );

  // Ensure dashboardData is valid and contains top field
  if (!dashboardData || !dashboardData.top) {
    return <div>Error: Dashboard data is not available</div>;
  }

  // Prepare data for PieChart
  const chartData = dashboardData.top.map((car: CarData) => ({
    name: `${car._source.markasy} ${car._source.ady} ${car._source.yyly}`,
    value: car._source.bahasy || 0,
  }));

  return (
    <Card>
      <CardHeader>
        <HeaderTexts>
          <CardTitle>Ulaglar TOP-10</CardTitle>
          <Subtitle>Ulaglar boýunça gysgaça hasabat</Subtitle>
        </HeaderTexts>
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          visible={visible}
          onVisibleChange={(flag) => setVisible(flag)}
        >
          <MenuButton icon={<MoreOutlined />} />
        </Dropdown>
      </CardHeader>
      <Divider />
      <ChartContainer id="chart-container">
        <ChartWrapper>
          <ChartTitle>Market Share</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                innerRadius={40}
                fill="#8884d8"
                label
              >
                {chartData.map((_, index: number) => (
                  <Cell key={`cell-${index}`} fill="#8884d8" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
        <DetailsWrapper>
          {chartData.map((car, index: number) => (
            <CarItem key={index}>
              <CarInfo>
                <CarCost>{car.value} TMT</CarCost>
                <CarName>{car.name}</CarName>
                <hr />
              </CarInfo>
            </CarItem>
          ))}
        </DetailsWrapper>
      </ChartContainer>
    </Card>
  );
};

export default TopCars;
