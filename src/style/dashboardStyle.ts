import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CardWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 40px 0;
`;
