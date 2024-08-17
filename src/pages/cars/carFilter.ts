import styled from "styled-components";
import { Button } from "antd";

export const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6c5dd3;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0 14px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 8px 16px rgba(108, 93, 211, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #5a4bc0;
    box-shadow: 0 12px 20px rgba(108, 93, 211, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #4a3b9c;
    box-shadow: 0 4px 8px rgba(108, 93, 211, 0.1);
    transform: translateY(0);
  }

  &:focus {
    background-color: #6c5dd3;
    box-shadow: 0 0 0 2px rgba(108, 93, 211, 0.4);
  }

  span.anticon {
    font-size: 18px;
    margin-right: 8px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: 1.5em;
  margin-bottom: 32px;
  margin-top: 24px;
  padding: 30px 16px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const AddDownloadContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 30px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const ActionButton = styled(Button)`
  border: 1px solid #6c5dd3;
  background-color: #ffffff;
  color: #6c5dd3;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 0 2px 8px rgba(108, 93, 211, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ffffff;
    background-color: #6c5dd3;
    border-color: #6c5dd3;
    box-shadow: 0 4px 12px rgba(108, 93, 211, 0.3);
  }

  &:active {
    background-color: #5942b2;
    border-color: #5942b2;
    box-shadow: none;
  }
`;

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin: 0;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;

export const FilterItem = styled.div`
  flex: 1;
  min-width: 220px;
`;

export const ResetButton = styled(Button)`
  background-color: #ff6b35;
  color: #ffffff;
  border-radius: 8px;
  padding: 8px 24px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.15);

  &:hover {
    background-color: #e65a2c;
  }

  &:active {
    background-color: #cc4e26;
  }
`;
