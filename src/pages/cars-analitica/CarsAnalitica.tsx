import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import axios from "axios";
import {
  AdditionalInfo,
  CarContainer,
  Card,
  CardContainer,
  CarDetailsContainer,
  CarImage,
  CarInfo,
  CarName,
  PaginationContainer,
  Price,
  ReportButton,
} from "./carsAnalytyca";

interface CarData {
  key: string;
  doc_count: number;
  max_price: { value: number };
  min_price: { value: number };
  last_addedd: { value: number; value_as_string: string };
  avg_price: { value: number };
  min_year: { value: number };
  avg_year?: number | null;
  max_year: { value: number };
  image: string;
}

const CarsAnalitica: FC = () => {
  const [carData, setCarData] = useState<CarData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(
          "http://95.85.121.153:3066/api/get-cars"
        );
        setCarData(response.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCars = carData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleReportClick = (carKey: string) => {
    // Redirect to CarDetails page with carKey as URL parameter
    navigate(`/cars/${carKey}`);
  };

  return (
    <div>
      <CardContainer>
        {currentCars.map((car, index) => (
          <Card key={index}>
            <CarInfo>
              <CarName>{car.key}</CarName>
            </CarInfo>
            <CarContainer>
              <CarImage src={car.image} alt={`${car.key} image`} />
            </CarContainer>
            <CarDetailsContainer>
              <div>
                <Price>
                  {car.last_addedd.value.toLocaleString().slice(0, 5)}... TKM
                </Price>
                <AdditionalInfo>Ortalama bahasy</AdditionalInfo>
              </div>
              <ReportButton onClick={() => handleReportClick(car.key)}>
                Hasabat
              </ReportButton>
            </CarDetailsContainer>
          </Card>
        ))}
      </CardContainer>
      <PaginationContainer>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={carData.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </PaginationContainer>
    </div>
  );
};

export default CarsAnalitica;
