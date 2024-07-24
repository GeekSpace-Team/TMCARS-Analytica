import { FC } from "react";
import styled from "styled-components";
import ThirdChart from "./ThirdChart";
import FirstChart from "./FirstChart";
import SecondChart from "./SecondChart";

// Styled wrapper for the charts
const ChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    .chart-group {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;

const Analytica: FC = () => {
  return (
    <div>
      <FirstChart />
      <ChartsWrapper>
        <div className="chart-group">
          <SecondChart />
          <ThirdChart />
        </div>
      </ChartsWrapper>
    </div>
  );
};

export default Analytica;
