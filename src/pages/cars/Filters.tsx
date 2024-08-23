import React from "react";
import { AutoComplete, DatePicker } from "antd";
import { Dayjs } from "dayjs"; // Import Dayjs
import { getUniqueValues } from "../../hooks/helpers";
import { Container, ResetButton } from "../../style/carFilter";
import { FilterState } from "../../types/type";

const { RangePicker } = DatePicker;

interface FiltersProps {
  tableData: any[];
  filters: FilterState;
  handleBrandChange: (value: string) => void;
  handleModelChange: (value: string) => void;
  handleYearChange: (value: string) => void;
  handleDateRangeChange: (dates: [Dayjs | null, Dayjs | null] | null) => void;
  resetFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  tableData,
  filters,
  handleBrandChange,
  handleModelChange,
  handleYearChange,
  handleDateRangeChange,
  resetFilters,
}) => {
  return (
    <Container>
      <AutoComplete
        style={{ width: 200 }}
        options={getUniqueValues(tableData, "markasy").map((brand) => ({
          value: brand,
        }))}
        placeholder="Select Brand"
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().includes(inputValue.toUpperCase())
        }
        onSelect={handleBrandChange}
        value={filters.brand}
      />
      <AutoComplete
        style={{ width: 200, marginLeft: 10 }}
        options={getUniqueValues(
          tableData.filter((item) => item.markasy === filters.brand),
          "ady"
        ).map((model) => ({
          value: model,
        }))}
        placeholder="Select Model"
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().includes(inputValue.toUpperCase())
        }
        onSelect={handleModelChange}
        value={filters.model}
        disabled={!filters.brand}
      />
      <AutoComplete
        style={{ width: 200, marginLeft: 10 }}
        options={getUniqueValues(tableData, "yyly").map((year) => ({
          value: year,
        }))}
        placeholder="Select Year"
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().includes(inputValue.toUpperCase())
        }
        onSelect={handleYearChange}
        value={filters.year}
      />
      <RangePicker onChange={handleDateRangeChange} />
      <ResetButton onClick={resetFilters}>Reset Filters</ResetButton>
    </Container>
  );
};

export default Filters;
