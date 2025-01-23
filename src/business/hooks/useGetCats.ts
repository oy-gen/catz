import { useEffect, useState } from "react";
import { Cat } from "../models/Cat.ts";
import { fetchCats } from "../../api/fetchCats.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";
import { parseRawCatData } from "../utils/parseRawCatData.ts";

export const useGetCats = (): {
  cats: Cat[];
  error: string | null;
  isLoading: boolean;
} => {
  const { cats, saveCatsToStore, filters, currentPage } = useCatsStore();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const rawData = await fetchCats(currentPage, filters);
        const parsedData = parseRawCatData(rawData);
        saveCatsToStore(parsedData);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching cats",
        );
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, filters]);

  return { cats, error, isLoading };
};
