import { useCallback, useEffect, useState } from "react";
import { Cat } from "../models/Cat.ts";
import { fetchCats } from "../../api/fetchCats.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";
import { parseRawCatData } from "../utils/parseRawCatData.ts";
import { catsSelector } from "../../store/selectors/catsSelector.ts";
import { filterSelector } from "../../store/selectors/filterSelector.ts";
import { pageSelector } from "../../store/selectors/pageSelector.ts";

export const useGetCats = (): {
  cats: Cat[];
  error: string | null;
  isLoading: boolean;
} => {
  const { filters } = useCatsStore(filterSelector);
  const { currentPage } = useCatsStore(pageSelector);
  const { cats, saveCats } = useCatsStore(catsSelector);

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
      setIsLoading(false);
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
