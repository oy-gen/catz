import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CatsStoreState } from "./CatsStoreState.ts";
import { filtersInitialState } from "./filterInitialState.ts";
import { Cat, CatImageData } from "../business/models/CatModel.ts";
import { Filters } from "../business/models/FilterType.ts";

export const useCatsStore = create<CatsStoreState>()(
  devtools(
    (set): CatsStoreState => ({
      cats: [],
      currentPage: 1,
      filters: filtersInitialState,
      catImages: [],
      saveCatsToStore: (cats: Cat[]) => {
        set((state) => ({ ...state, cats: [...cats] }));
      },
      saveCurrentPage: (page: number) => {
        set((state) => ({ ...state, currentPage: page }));
      },
      saveFiltersToStore: (filters: Filters) => {
        set((state) => ({
          ...state,
          filters: { ...filters },
        }));
      },
      saveCatImageToStore: (catImageData: CatImageData) => {
        set((state) => ({
          ...state,
          catImages: [...state.catImages, catImageData],
        }));
      },
      resetFilters: () => {
        set((state) => ({
          ...state,
          filters: filtersInitialState,
        }));
      },
    }),
    {
      name: "Redux DevTools",
      enabled: true,
    },
  ),
);
