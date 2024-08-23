import React from "react";
import { Dropdown, Menu } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import {
  ActionButton,
  AddButton,
  AddDownloadContainer,
} from "../../style/carFilter";
import {
  downloadChartImage,
  downloadExcel,
  downloadPDF,
} from "../../hooks/downloadUtils";

interface ActionButtonsProps {
  chartRef: React.RefObject<HTMLDivElement>;
  filteredData: any[];
  onAddItem: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  chartRef,
  filteredData,
  onAddItem,
}) => {
  const downloadFile = (fileType: "pdf" | "excel") => {
    const downloadMethods: { [key in "pdf" | "excel"]: () => void } = {
      pdf: () => downloadPDF(filteredData),
      excel: () => downloadExcel(filteredData),
    };
    downloadMethods[fileType]();
  };

  const menu = (
    <Menu onClick={(e) => downloadFile(e.key as "pdf" | "excel")}>
      <Menu.Item key="pdf">PDF</Menu.Item>
      <Menu.Item key="excel">Excel</Menu.Item>
    </Menu>
  );

  return (
    <AddDownloadContainer>
      <div style={{ display: "flex", gap: "20px" }}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <ActionButton icon={<DownloadOutlined />}>Download</ActionButton>
        </Dropdown>
        <ActionButton
          onClick={() => downloadChartImage(chartRef)}
          icon={<DownloadOutlined />}
        >
          Download Chart
        </ActionButton>
      </div>
      <AddButton icon={<PlusOutlined />} onClick={onAddItem}>
        Add Item
      </AddButton>
    </AddDownloadContainer>
  );
};

export default ActionButtons;
