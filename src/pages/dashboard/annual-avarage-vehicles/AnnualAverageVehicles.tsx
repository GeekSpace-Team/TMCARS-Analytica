import React from "react";
import { Menu, Dropdown } from "antd";
import {
  MoreOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Ensure this import is present
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import {
  Card,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTitle,
  Divider,
  MenuButton,
  StyledMenuItem,
} from "./annual";

interface AnnualAverageVehiclesProps {
  dashboardData: {
    price_correlation_year?: {
      buckets: Array<{
        key: number;
        doc_count: number;
        price_and_year: {
          value: number;
        };
      }>;
    };
  };
}

const AnnualAverageVehicles: React.FC<AnnualAverageVehiclesProps> = ({
  dashboardData,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "excel") {
      downloadExcel();
    } else if (e.key === "pdf") {
      downloadPDF();
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      priceCorrelationData.map((bucket) => ({
        Month: bucket.key.toString(),
        Count: bucket.price_and_year.value,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Annual Average Vehicles"
    );
    XLSX.writeFile(workbook, "Annual_Average_Vehicles.xlsx");
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF();
    const tableData = priceCorrelationData.map((bucket) => [
      bucket.key.toString(),
      bucket.price_and_year.value,
    ]);
    (pdf as any).autoTable({
      head: [["Month", "Count"]],
      body: tableData,
    });
    const canvas = await html2canvas(
      document.querySelector("#chart-container") as HTMLElement
    );
    const imgData = canvas.toDataURL("image/png");
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 100);
    pdf.save("Annual_Average_Vehicles.pdf");
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

  const priceCorrelationData =
    dashboardData?.price_correlation_year?.buckets || [];

  const chartData = priceCorrelationData.map((bucket) => ({
    month: bucket.key.toString(),
    count: bucket.price_and_year.value,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ulaglaryň ýyllyk ortalamasy</CardTitle>
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
        <ChartTitle>112,340 TMT</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8f95b2" }} />
            <YAxis tick={{ fontSize: 12, fill: "#8f95b2" }} />
            <Tooltip
              content={({ payload }: any) => {
                if (payload && payload.length) {
                  const { value } = payload[0];
                  return (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "5px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <p>{`Count: ${value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="count" fill="#4CAF50" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default AnnualAverageVehicles;
