import React, { useState, useEffect } from "react";
import { Dropdown, Menu, DatePicker, AutoComplete, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Ensure this import is present
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import {
  ActionButton,
  ActionWrapper,
  Container,
  ResetButton,
} from "./carFilter";
import { CarFiltersProps } from "../../types/type";

const { RangePicker } = DatePicker;

const CarFilters: React.FC<CarFiltersProps> = ({ tableData }) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<any[]>(tableData);

  useEffect(() => {
    const brandSet = new Set(tableData.map((item) => item.markasy));
    setBrands([...brandSet]);
  }, [tableData]);

  useEffect(() => {
    if (selectedBrand) {
      const filteredModels = tableData
        .filter((item) => item.markasy === selectedBrand)
        .map((item) => item.ady);
      setModels([...new Set(filteredModels)]);
      setSelectedModel(null); // Reset model selection when brand changes
    } else {
      setModels([]);
    }
  }, [selectedBrand, tableData]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      const filteredYears = tableData
        .filter(
          (item) => item.markasy === selectedBrand && item.ady === selectedModel
        )
        .map((item) => item.yyly);
      setYears([...new Set(filteredYears)]);
    } else {
      setYears([]);
    }
  }, [selectedBrand, selectedModel, tableData]);

  useEffect(() => {
    const filtered = tableData.filter((item) => {
      const brandMatch = selectedBrand ? item.markasy === selectedBrand : true;
      const modelMatch = selectedModel ? item.ady === selectedModel : true;
      const yearMatch = selectedYear ? item.yyly === selectedYear : true;
      return brandMatch && modelMatch && yearMatch;
    });
    setFilteredData(filtered);
  }, [selectedBrand, selectedModel, selectedYear, tableData]);

  const resetFilters = () => {
    setSelectedBrand(null);
    setSelectedModel(null);
    setSelectedYear(null);
    setFilteredData(tableData);
  };

  const downloadFile = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        downloadPDF();
        break;
      case "jpg":
        downloadJPG();
        break;
      case "excel":
        downloadExcel();
        break;
      case "word":
        downloadWord();
        break;
      default:
        break;
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const headers = [["Brand", "Model", "Year", "Price", "Created Date"]];
    const data = filteredData.map((row) => [
      row.markasy,
      row.ady,
      row.yyly,
      row.bahasy,
      row.created_at,
    ]);

    (doc as any).autoTable({
      head: headers,
      body: data,
    });

    doc.save("table.pdf");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
    XLSX.writeFile(workbook, "table.xlsx");
  };

  const downloadJPG = () => {
    html2canvas(document.querySelector("#table-id")!).then((canvas) => {
      const link = document.createElement("a");
      link.download = "table.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    });
  };

  const downloadWord = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: "Table Data",
              heading: HeadingLevel.HEADING_1,
            }),
            ...filteredData.map(
              (row) =>
                new Paragraph({
                  children: [
                    new TextRun(row.markasy.toString()),
                    new TextRun(row.ady.toString()),
                    new TextRun(row.yyly.toString()),
                    new TextRun(row.bahasy.toString()),
                    new TextRun(row.created_at.toString()),
                  ],
                })
            ),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "table.docx";
      link.click();
    });
  };

  const menu = (
    <Menu onClick={(e) => downloadFile(e.key)}>
      <Menu.Item key="pdf">PDF</Menu.Item>
      <Menu.Item key="excel">Excel</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Container>
        <AutoComplete
          style={{ width: 200 }}
          options={brands.map((brand) => ({ value: brand }))}
          placeholder="Select Brand"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().includes(inputValue.toUpperCase())
          }
          onSelect={(value) => setSelectedBrand(value)}
          value={selectedBrand}
        />
        <AutoComplete
          style={{ width: 200, marginLeft: 10 }}
          options={models.map((model) => ({ value: model }))}
          placeholder="Select Model"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().includes(inputValue.toUpperCase())
          }
          onSelect={(value) => setSelectedModel(value)}
          value={selectedModel}
          disabled={!selectedBrand}
        />
        <AutoComplete
          style={{ width: 200, marginLeft: 10 }}
          options={years.map((year) => ({ value: year }))}
          placeholder="Select Year"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().includes(inputValue.toUpperCase())
          }
          onSelect={(value) => setSelectedYear(value)}
          value={selectedYear}
          disabled={!selectedModel}
        />
        <ActionWrapper>
          <RangePicker />
          <Dropdown overlay={menu} trigger={["click"]}>
            <ActionButton icon={<DownloadOutlined />}>Download</ActionButton>
          </Dropdown>
        </ActionWrapper>
      </Container>
      <ResetButton onClick={resetFilters}>Reset Filters</ResetButton>
      <Table
        id="table-id"
        dataSource={filteredData}
        columns={[
          { title: "Brand", dataIndex: "markasy", key: "brand" },
          { title: "Model", dataIndex: "ady", key: "model" },
          { title: "Year", dataIndex: "yyly", key: "year" },
          { title: "Price", dataIndex: "bahasy", key: "price" },
          {
            title: "Created Date",
            dataIndex: "created_at",
            key: "created_at",
          },
        ]}
        rowKey="id"
      />
    </>
  );
};

export default CarFilters;
