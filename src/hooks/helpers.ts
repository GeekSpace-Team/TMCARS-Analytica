export const getUniqueValues = (data: any[], key: string) => {
  return Array.from(new Set(data.map((item) => item[key])));
};
