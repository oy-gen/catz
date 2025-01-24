import { useCallback, useEffect, useState } from "react";
import { Cat } from "../models/Cat.ts";
import { fetchCats } from "../../api/fetchCats.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";
import { parseRawCatData } from "../utils/parseRawCatData.ts";

export const useGetCats = (): {
  cats: Cat[];
  error: string | null;
  isLoading: boolean;
} => {
  const { cats, saveCats, filters, currentPage } = useCatsStore();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      const rawData = await fetchCats(currentPage, filters);
      const parsedData = parseRawCatData(rawData);
      saveCats(parsedData);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while fetching cats",
      );
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, filters]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(debounce);
  }, [fetchData]);

  return { cats, error, isLoading };
};
