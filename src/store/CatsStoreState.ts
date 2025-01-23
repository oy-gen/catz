import { Cat } from "../business/models/Cat.ts";
import { Filters } from "../business/models/Filters.ts";
import { CatImage } from "../business/models/CatImage.ts";

export interface CatsStoreState {
  cats: Cat[];
  filters: Filters;
  currentPage: number;
  getCatImageById: (id: string) => string | null;
  saveCurrentPage: (page: number) => void;
  catImages: CatImage[];
  saveCatsToStore: (cats: Cat[]) => void;
  saveCatImageToStore: (catImage: CatImage) => void;
  saveFiltersToStore: (filters: Filters) => void;
  resetFilters: () => void;
}
