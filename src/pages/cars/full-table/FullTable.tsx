import React, { useState } from "react";
import { Table, Checkbox, Pagination, Row, Col } from "antd";
import styled from "styled-components";
import CarFilters from "../CarFilters";

const { Column } = Table;

// Styled components
const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const TableWrapper = styled.div`
  overflow-x: auto;

  .ant-table-thead > tr > th {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #718096;
    background-color: #fafafa;
  }

  .ant-table-tbody > tr > td {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: #111827;
  }
`;

const Footer = styled(Row)`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Define the data type
interface CarData {
  key: string;
  ady: string;
  gosulanSenesi: string;
  markasy: string;
  yyly: string;
  yeri: string;
  bahasy: string;
}

// Sample data
const data: CarData[] = [
  {
    key: "1",
    ady: "Toyota Camry",
    gosulanSenesi: "2020",
    markasy: "Toyota",
    yyly: "2020",
    yeri: "Japan",
    bahasy: "$30,000",
  },
  {
    key: "2",
    ady: "Honda Accord",
    gosulanSenesi: "2019",
    markasy: "Honda",
    yyly: "2019",
    yeri: "Japan",
    bahasy: "$25,000",
  },
  {
    key: "3",
    ady: "Ford Mustang",
    gosulanSenesi: "2018",
    markasy: "Ford",
    yyly: "2018",
    yeri: "USA",
    bahasy: "$35,000",
  },
  {
    key: "4",
    ady: "Chevrolet Malibu",
    gosulanSenesi: "2021",
    markasy: "Chevrolet",
    yyly: "2021",
    yeri: "USA",
    bahasy: "$28,000",
  },
  {
    key: "5",
    ady: "Nissan Altima",
    gosulanSenesi: "2017",
    markasy: "Nissan",
    yyly: "2017",
    yeri: "Japan",
    bahasy: "$22,000",
  },
  {
    key: "6",
    ady: "BMW 3 Series",
    gosulanSenesi: "2022",
    markasy: "BMW",
    yyly: "2022",
    yeri: "Germany",
    bahasy: "$40,000",
  },
  {
    key: "7",
    ady: "Audi A4",
    gosulanSenesi: "2021",
    markasy: "Audi",
    yyly: "2021",
    yeri: "Germany",
    bahasy: "$38,000",
  },
  {
    key: "8",
    ady: "Mercedes-Benz C-Class",
    gosulanSenesi: "2020",
    markasy: "Mercedes-Benz",
    yyly: "2020",
    yeri: "Germany",
    bahasy: "$42,000",
  },
  {
    key: "9",
    ady: "Hyundai Sonata",
    gosulanSenesi: "2019",
    markasy: "Hyundai",
    yyly: "2019",
    yeri: "South Korea",
    bahasy: "$24,000",
  },
  {
    key: "10",
    ady: "Kia Optima",
    gosulanSenesi: "2018",
    markasy: "Kia",
    yyly: "2018",
    yeri: "South Korea",
    bahasy: "$23,000",
  },
  {
    key: "11",
    ady: "Subaru Legacy",
    gosulanSenesi: "2021",
    markasy: "Subaru",
    yyly: "2021",
    yeri: "Japan",
    bahasy: "$29,000",
  },
  {
    key: "12",
    ady: "Mazda 6",
    gosulanSenesi: "2020",
    markasy: "Mazda",
    yyly: "2020",
    yeri: "Japan",
    bahasy: "$27,000",
  },
  {
    key: "13",
    ady: "Volkswagen Passat",
    gosulanSenesi: "2019",
    markasy: "Volkswagen",
    yyly: "2019",
    yeri: "Germany",
    bahasy: "$26,000",
  },
  {
    key: "14",
    ady: "Jaguar XE",
    gosulanSenesi: "2018",
    markasy: "Jaguar",
    yyly: "2018",
    yeri: "UK",
    bahasy: "$32,000",
  },
  {
    key: "15",
    ady: "Land Rover Range Rover",
    gosulanSenesi: "2021",
    markasy: "Land Rover",
    yyly: "2021",
    yeri: "UK",
    bahasy: "$50,000",
  },
  {
    key: "16",
    ady: "Porsche Panamera",
    gosulanSenesi: "2020",
    markasy: "Porsche",
    yyly: "2020",
    yeri: "Germany",
    bahasy: "$60,000",
  },
  {
    key: "17",
    ady: "Tesla Model 3",
    gosulanSenesi: "2022",
    markasy: "Tesla",
    yyly: "2022",
    yeri: "USA",
    bahasy: "$45,000",
  },
  {
    key: "18",
    ady: "Chevrolet Camaro",
    gosulanSenesi: "2021",
    markasy: "Chevrolet",
    yyly: "2021",
    yeri: "USA",
    bahasy: "$33,000",
  },
  {
    key: "19",
    ady: "Ford Explorer",
    gosulanSenesi: "2019",
    markasy: "Ford",
    yyly: "2019",
    yeri: "USA",
    bahasy: "$36,000",
  },
  {
    key: "20",
    ady: "Honda Civic",
    gosulanSenesi: "2020",
    markasy: "Honda",
    yyly: "2020",
    yeri: "Japan",
    bahasy: "$22,500",
  },
  {
    key: "21",
    ady: "Hyundai Tucson",
    gosulanSenesi: "2022",
    markasy: "Hyundai",
    yyly: "2022",
    yeri: "South Korea",
    bahasy: "$31,000",
  },
  {
    key: "22",
    ady: "Kia Sorento",
    gosulanSenesi: "2021",
    markasy: "Kia",
    yyly: "2021",
    yeri: "South Korea",
    bahasy: "$34,000",
  },
  {
    key: "23",
    ady: "Mazda CX-5",
    gosulanSenesi: "2020",
    markasy: "Mazda",
    yyly: "2020",
    yeri: "Japan",
    bahasy: "$29,500",
  },
  {
    key: "24",
    ady: "Nissan Rogue",
    gosulanSenesi: "2019",
    markasy: "Nissan",
    yyly: "2019",
    yeri: "Japan",
    bahasy: "$27,000",
  },
  {
    key: "25",
    ady: "Subaru Outback",
    gosulanSenesi: "2018",
    markasy: "Subaru",
    yyly: "2018",
    yeri: "Japan",
    bahasy: "$26,500",
  },
  {
    key: "26",
    ady: "Volkswagen Tiguan",
    gosulanSenesi: "2021",
    markasy: "Volkswagen",
    yyly: "2021",
    yeri: "Germany",
    bahasy: "$32,000",
  },
  {
    key: "27",
    ady: "Audi Q5",
    gosulanSenesi: "2020",
    markasy: "Audi",
    yyly: "2020",
    yeri: "Germany",
    bahasy: "$37,500",
  },
  {
    key: "28",
    ady: "BMW X3",
    gosulanSenesi: "2019",
    markasy: "BMW",
    yyly: "2019",
    yeri: "Germany",
    bahasy: "$39,000",
  },
  {
    key: "29",
    ady: "Jaguar F-Pace",
    gosulanSenesi: "2021",
    markasy: "Jaguar",
    yyly: "2021",
    yeri: "UK",
    bahasy: "$42,000",
  },
  {
    key: "30",
    ady: "Land Rover Discovery",
    gosulanSenesi: "2020",
    markasy: "Land Rover",
    yyly: "2020",
    yeri: "UK",
    bahasy: "$48,000",
  },
  {
    key: "31",
    ady: "Porsche Cayenne",
    gosulanSenesi: "2019",
    markasy: "Porsche",
    yyly: "2019",
    yeri: "Germany",
    bahasy: "$55,000",
  },
  {
    key: "32",
    ady: "Tesla Model S",
    gosulanSenesi: "2022",
    markasy: "Tesla",
    yyly: "2022",
    yeri: "USA",
    bahasy: "$75,000",
  },
  {
    key: "33",
    ady: "Chevrolet Traverse",
    gosulanSenesi: "2021",
    markasy: "Chevrolet",
    yyly: "2021",
    yeri: "USA",
    bahasy: "$40,000",
  },
  {
    key: "34",
    ady: "Ford F-150",
    gosulanSenesi: "2019",
    markasy: "Ford",
    yyly: "2019",
    yeri: "USA",
    bahasy: "$33,500",
  },
  {
    key: "35",
    ady: "Honda Pilot",
    gosulanSenesi: "2020",
    markasy: "Honda",
    yyly: "2020",
    yeri: "Japan",
    bahasy: "$34,000",
  },
  {
    key: "36",
    ady: "Hyundai Palisade",
    gosulanSenesi: "2021",
    markasy: "Hyundai",
    yyly: "2021",
    yeri: "South Korea",
    bahasy: "$36,500",
  },
  {
    key: "37",
    ady: "Kia Telluride",
    gosulanSenesi: "2020",
    markasy: "Kia",
    yyly: "2020",
    yeri: "South Korea",
    bahasy: "$38,000",
  },
  {
    key: "38",
    ady: "Mazda MX-5 Miata",
    gosulanSenesi: "2019",
    markasy: "Mazda",
    yyly: "2019",
    yeri: "Japan",
    bahasy: "$27,500",
  },
  {
    key: "39",
    ady: "Nissan Murano",
    gosulanSenesi: "2018",
    markasy: "Nissan",
    yyly: "2018",
    yeri: "Japan",
    bahasy: "$28,000",
  },
  {
    key: "40",
    ady: "Subaru Crosstrek",
    gosulanSenesi: "2021",
    markasy: "Subaru",
    yyly: "2021",
    yeri: "Japan",
    bahasy: "$30,000",
  },
  {
    key: "41",
    ady: "Volkswagen Atlas",
    gosulanSenesi: "2020",
    markasy: "Volkswagen",
    yyly: "2020",
    yeri: "Germany",
    bahasy: "$33,500",
  },
  {
    key: "42",
    ady: "Audi Q7",
    gosulanSenesi: "2019",
    markasy: "Audi",
    yyly: "2019",
    yeri: "Germany",
    bahasy: "$45,000",
  },
  {
    key: "43",
    ady: "BMW X5",
    gosulanSenesi: "2021",
    markasy: "BMW",
    yyly: "2021",
    yeri: "Germany",
    bahasy: "$50,000",
  },
  {
    key: "44",
    ady: "Jaguar I-PACE",
    gosulanSenesi: "2020",
    markasy: "Jaguar",
    yyly: "2020",
    yeri: "UK",
    bahasy: "$70,000",
  },
  {
    key: "45",
    ady: "Land Rover Range Rover Velar",
    gosulanSenesi: "2019",
    markasy: "Land Rover",
    yyly: "2019",
    yeri: "UK",
    bahasy: "$52,000",
  },
  {
    key: "46",
    ady: "Porsche Macan",
    gosulanSenesi: "2021",
    markasy: "Porsche",
    yyly: "2021",
    yeri: "Germany",
    bahasy: "$57,000",
  },
  {
    key: "47",
    ady: "Tesla Model X",
    gosulanSenesi: "2022",
    markasy: "Tesla",
    yyly: "2022",
    yeri: "USA",
    bahasy: "$85,000",
  },
  {
    key: "48",
    ady: "Chevrolet Bolt EV",
    gosulanSenesi: "2021",
    markasy: "Chevrolet",
    yyly: "2021",
    yeri: "USA",
    bahasy: "$33,000",
  },
  {
    key: "49",
    ady: "Ford Escape",
    gosulanSenesi: "2019",
    markasy: "Ford",
    yyly: "2019",
    yeri: "USA",
    bahasy: "$28,500",
  },
  {
    key: "50",
    ady: "Honda HR-V",
    gosulanSenesi: "2020",
    markasy: "Honda",
    yyly: "2020",
    yeri: "Japan",
    bahasy: "$26,000",
  },
];

const FullTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sorter, setSorter] = useState<{
    columnKey?: string;
    order?: "ascend" | "descend";
  }>({});

  const handleCheckboxChange = (recordKey: React.Key) => {
    if (selectedRowKeys.includes(recordKey)) {
      setSelectedRowKeys(selectedRowKeys.filter((key) => key !== recordKey));
    } else {
      setSelectedRowKeys([...selectedRowKeys, recordKey]);
    }
    setAllSelected(false); // Deselect "select all" if an individual item is selected
  };

  const handleSelectAllChange = () => {
    if (allSelected) {
      setSelectedRowKeys([]);
    } else {
      setSelectedRowKeys(data.map((item) => item.key));
    }
    setAllSelected(!allSelected);
  };

  const handleTableChange = (pagination: any, sorter: any) => {
    // Check if pagination data is present
    if (pagination && pagination.current) {
      setCurrentPage(pagination.current);
    }
    if (pagination && pagination.pageSize) {
      setPageSize(pagination.pageSize);
    }
    setSorter(sorter);
  };

  // Sort data based on sorter
  const sortedData = sorter.order
    ? [...data].sort((a, b) => {
        const sortOrder = sorter.order === "ascend" ? 1 : -1;
        const aValue = a[sorter.columnKey as keyof CarData] as string;
        const bValue = b[sorter.columnKey as keyof CarData] as string;
        return aValue.localeCompare(bValue) * sortOrder;
      })
    : data;

  // Paginate data
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Container>
      <CarFilters />
      <TableWrapper>
        <Table
          dataSource={paginatedData}
          pagination={false}
          scroll={{ x: "max-content" }}
          sticky
          rowKey="key"
          onChange={handleTableChange}
        >
          <Column<CarData>
            title={
              <Checkbox
                checked={allSelected}
                indeterminate={selectedRowKeys.length > 0 && !allSelected}
                onChange={handleSelectAllChange}
              />
            }
            key="select"
            render={(_, record) => (
              <Checkbox
                checked={selectedRowKeys.includes(record.key)}
                onChange={() => handleCheckboxChange(record.key)}
              />
            )}
          />
          <Column<CarData>
            title="Ady"
            dataIndex="ady"
            key="ady"
            sorter={(a, b) => a.ady.localeCompare(b.ady)}
          />
          <Column<CarData>
            title="Gosulan senesi"
            dataIndex="gosulanSenesi"
            key="gosulanSenesi"
            sorter={(a, b) => a.gosulanSenesi.localeCompare(b.gosulanSenesi)}
          />
          <Column<CarData>
            title="Markasy"
            dataIndex="markasy"
            key="markasy"
            sorter={(a, b) => a.markasy.localeCompare(b.markasy)}
          />
          <Column<CarData>
            title="Yyly"
            dataIndex="yyly"
            key="yyly"
            sorter={(a, b) => a.yyly.localeCompare(b.yyly)}
            render={(yyly) => (
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22.4px",
                  color: "#0CAF60",
                  textAlign: "left",
                  display: "block",
                }}
              >
                {yyly}
              </span>
            )}
          />
          <Column<CarData>
            title="Yeri"
            dataIndex="yeri"
            key="yeri"
            sorter={(a, b) => a.yeri.localeCompare(b.yeri)}
            render={(yeri) => (
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22.4px",
                  color: "#FE964A",
                  textAlign: "left",
                  display: "block",
                }}
              >
                {yeri}
              </span>
            )}
          />
          <Column<CarData>
            title="Bahasy"
            dataIndex="bahasy"
            key="bahasy"
            sorter={(a, b) => a.bahasy.localeCompare(b.bahasy)}
          />
        </Table>
      </TableWrapper>

      <Footer>
        <Col>
          <span>Netije sany: {data.length}</span>
        </Col>
        <Col>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={data.length}
            onChange={(page, size) => {
              setCurrentPage(page);
              setPageSize(size);
            }}
          />
        </Col>
      </Footer>
    </Container>
  );
};

export default FullTable;
