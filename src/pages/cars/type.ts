import { Dayjs } from "dayjs";

export interface CarFiltersProps {
  tableData: Array<{
    id: string;
    markasy: string;
    ady: string;
    yyly: string;
    bahasy: number;
    created_at: string;
  }>;
}

export interface FilterState {
  brand: string | null;
  model: string | null;
  year: string | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}
