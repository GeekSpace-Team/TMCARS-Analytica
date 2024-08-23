// Dashboard Top Cars types starts here .............................................................

import { Dayjs } from "dayjs";

export interface CarData {
  _source: {
    markasy: string;
    ady: string;
    yyly: string;
    bahasy: number;
  };
}

export interface TopCarsDashboardData {
  top: CarData[];
}

export interface TopCarsProps {
  dashboardData: TopCarsDashboardData;
}

// Dashboard Cards types starts here ...................................................................

export interface Bucket {
  key: string;
  doc_count: number;
  max_price: { value: number };
  min_price: { value: number };
  avg_price: { value: number };
}

export interface BrandPriceComparisonDashboardData {
  brand_price_comparison: {
    buckets: Bucket[];
  };
}

export interface DashboardCardsProps {
  dashboardData: BrandPriceComparisonDashboardData;
}

// FuulTable types starts here ................................................................

export interface DataType {
  key: string;
  markasy: string;
  ady: string;
  yyly: string;
  bahasy: number;
  created_at: string;
}

export interface DataFilter {
  brand?: string | undefined;
  text?: string | undefined;
  start_date?: string | undefined;
  end_date?: string | undefined;
  start_price?: number | undefined;
  end_price?: number | undefined;
  min_year?: number | undefined;
  max_year?: number | undefined;
  page?: number | undefined;
}

export interface CarFiltersProps {
  tableData: DataType[];
  onPaginationChange: (page: number, pageSize: number) => void;
  filter: DataFilter;
  onFilter: (f: DataFilter) => void;
}

// FuulTable types ends here ................................................................

export interface FilterState {
  brand: string | null;
  model: string | null;
  year: string | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}
