import { useState, useEffect } from "react";

interface SortOption {
  title: string;
  name: string;
}

const useInput = () => {
  const sortOptions: SortOption[] = [
    {
      title: "High to low",
      name: "priceToLow",
    },
    {
      title: "Low to High",
      name: "priceToHigh",
    },
  ];

  const [sortName, setSortName] = useState<string>("");
  const [sortOption, setSortOption] = useState(Object);

  useEffect(() => {
    const newVal = sortOptions.find((o) => o.name === sortName);
    newVal && setSortOption(newVal);
  }, [sortName]);

  return [sortOption, setSortName, sortOptions];
};

export default useInput;
