import { Button } from "antd";
import styled from "styled-components";

// Styles for the card container
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Styles for the car card
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarName = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #1a202c;
  margin-bottom: 8px;
`;

export const CarImage = styled.img`
  width: 232px;
  height: 72px;
  margin-bottom: 16px;
`;

export const CarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const Price = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 25.2px;
  color: #1a202c;
`;

export const AdditionalInfo = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #1a202c;
  margin-top: 4px;
`;

export const ReportButton = styled(Button)`
  width: 116px;
  height: 44px;
  border-radius: 4px;
  background-color: #6c5dd3;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #5849c0;
  }
`;

export const CarDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
