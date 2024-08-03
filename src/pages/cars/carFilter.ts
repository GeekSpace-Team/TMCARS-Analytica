import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px;
`;

export const ActionButton = styled(Button)`
  border: none;
  background: none;
  color: #6c5dd3;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: #5a4db6;
  }
`;

export const ResetButton = styled(Button)`
  background-color: orange;
  border: none;
  color: #fff;
  margin-bottom: 30px;
ch`;
