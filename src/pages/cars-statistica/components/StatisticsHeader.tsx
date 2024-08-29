import { FC } from "react";
import { Card, Menu, Dropdown, Button } from "antd";
import {
  DownloadOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";

const StatisticsHeader: FC = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById("statistics-table");
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "pt",
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("car-statistics.pdf");
      });
    }
  };

  const handleDownloadExcel = () => {
    const table = document.getElementById("statistics-table");
    if (table) {
      const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
      XLSX.writeFile(wb, "car-statistics.xlsx");
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<FilePdfOutlined />} onClick={handleDownloadPDF}>
        Download PDF
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<FileExcelOutlined />}
        onClick={handleDownloadExcel}
      >
        Download Excel
      </Menu.Item>
    </Menu>
  );

  return (
    <Card style={{ marginTop: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Car Statistics</h2>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button icon={<DownloadOutlined />}>Download</Button>
        </Dropdown>
      </div>
    </Card>
  );
};

export default StatisticsHeader;
