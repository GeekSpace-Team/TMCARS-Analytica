import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const CarDetails: FC = () => {
  const { carKey } = useParams<{ carKey: string }>();
  const [car, setCar] = useState<CarData | null>(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(
          "http://95.85.121.153:3066/api/get-cars"
        );
        const foundCar = response.data.find((c: CarData) => c.key === carKey);
        setCar(foundCar || null);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    if (carKey) {
      fetchCarData();
    }
  }, [carKey]);

  if (!car) {
    return <div>Loading or Car Not Found...</div>;
  }

  return (
    <Container>
      <ImageContainer>
        <CarImage src={car.image} alt={`${car.key} image`} />
      </ImageContainer>
      <DetailsContainer>
        <CarName>{car.key}</CarName>
        <Detail>
          <Label>Document Count:</Label> {car.doc_count}
        </Detail>
        <Detail>
          <Label>Max Price:</Label> {car.max_price.value} TKM
        </Detail>
        <Detail>
          <Label>Min Price:</Label> {car.min_price.value} TKM
        </Detail>
        <Detail>
          <Label>Average Price:</Label> {car.avg_price.value} TKM
        </Detail>
        <Detail>
          <Label>Min Year:</Label> {car.min_year.value}
        </Detail>
        <Detail>
          <Label>Average Year:</Label> {car.avg_year ?? "N/A"}
        </Detail>
        <Detail>
          <Label>Max Year:</Label> {car.max_year.value}
        </Detail>
      </DetailsContainer>
    </Container>
  );
};

export default CarDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CarImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CarName = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
`;

const Detail = styled.div`
  font-size: 1rem;
  color: #555;
`;

const Label = styled.span`
  font-weight: bold;
  color: #333;
`;
