import { Cat, CatImageData } from "../business/models/CatModel.ts";
import { Filters } from "../business/models/FilterType.ts";

export interface CatsStoreState {
  cats: Cat[];
  filters: Filters;
  currentPage: number;
  saveCurrentPage: (page: number) => void;
  catImages: CatImageData[];
  saveCatsToStore: (cats: Cat[]) => void;
  saveCatImageToStore: (catImageData: CatImageData) => void;
  saveFiltersToStore: (filters: Filters) => void;
  resetFilters: () => void;
}
