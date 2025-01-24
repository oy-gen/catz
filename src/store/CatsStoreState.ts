import { Cat } from "../business/models/Cat.ts";
import { Filters } from "../business/models/Filters.ts";

export interface CatsStoreState {
  cats: Cat[];
  filters: Filters;
  currentPage: number;
  saveCurrentPage: (page: number) => void;
  saveCats: (cats: Cat[]) => void;
  saveFilters: (filters: Filters) => void;
  resetFilters: () => void;
}
