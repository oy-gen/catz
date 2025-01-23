import { CatRawModel } from "../models/CatRawModel.ts";
import axios from "axios";
import { Filters } from "../../business/models/FilterType.ts";

export const fetchCats = async (
  page: number,
  filters?: Filters,
): Promise<CatRawModel[]> => {
  const url = buildFetchCatsUrl(page, filters);
  const response = await axios.get(url);
  return response.data;
};

const buildFetchCatsUrl = (page: number, filters?: Filters): string => {
  const baseUrl: string = "https://cataas.com/api/cats";
  const paginationString = `?limit=9&skip=${(page - 1) * 9}`;
  let filtersString = "";
  if (filters && !filters.all) {
    const activeFilters: string[] = Object.entries(filters)
      .filter(([_key, value]) => value)
      .map(([key]) => key);
    if (activeFilters.length) {
      filtersString = `&tags=${activeFilters.join("%2C")}`;
    }
  }
  return baseUrl + paginationString + filtersString;
};
