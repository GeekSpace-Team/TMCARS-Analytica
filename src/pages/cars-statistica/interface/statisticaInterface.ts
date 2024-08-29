export interface CarStatistics {
  key: string;
  doc_count: number;
  max_price: { value: number };
  min_price: { value: number };
  last_addedd: { value: number; value_as_string: string };
  avg_price: { value: number };
  min_year: { value: number };
  avg_year: { value: number };
  max_year: { value: number };
}
