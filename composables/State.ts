type SearchEvent = {
  category?: string;
  condition: string;
  make: string;
  sellingPrice: number;
};

export const useStateData = () => {
  const searchData = useState("searchData", () => [] as any);

  return {
    searchData,
  };
};
