import { useEffect, useState } from "react";
import { CatRawModel } from "../../api/models/CatRawModel.ts";
import { Cat, CatData } from "../models/CatModel.ts";
import { fetchCats } from "../../api/services/fetchCats.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";

export const useFetchCats = (): CatData => {
  const { cats, saveCatsToStore, filters, page } = useCatsStore();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const rawData = await fetchCats(page, filters);
        const parsedData = parseRawData(rawData);
        saveCatsToStore(parsedData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred",
        );
      }
    };
    fetchData();
    setIsLoading(false);
  }, []);
  return { cats, error, isLoading };
};

const parseRawData = (response: CatRawModel[]): Cat[] => {
  const baseUrl: string = "https://cataas.com/cat/";
  const imageFormat: string = "?type=square&position=center";
  return response.map((cat): Cat => {
    return {
      id: cat._id,
      url: baseUrl + cat._id + imageFormat,
      tags: cat.tags,
      size: cat.size,
    };
  });
};

// const convertBytesToKB = (bytes: number): string => {
//   const kb = bytes / 1024;
//   return `${kb.toFixed(0)}KB`;
// };
