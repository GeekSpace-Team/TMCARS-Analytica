import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";

export const downloadPDF = (filteredData: any[]) => {
  const doc = new jsPDF();
  const headers = [["Brand", "Model", "Year", "Price", "Created Date"]];
  const data = filteredData.map((row) => [
    row.markasy,
    row.ady,
    row.yyly,
    row.bahasy,
    row.created_at,
  ]);
  (doc as any).autoTable({ head: headers, body: data });
  doc.save("table.pdf");
};

export const downloadExcel = (filteredData: any[]) => {
  const worksheet = XLSX.utils.json_to_sheet(filteredData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
  XLSX.writeFile(workbook, "table.xlsx");
};

export const downloadChartImage = (
  chartRef: React.RefObject<HTMLDivElement>
) => {
  if (chartRef.current) {
    html2canvas(chartRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "chart.png";
      link.click();
    });
  }
};
