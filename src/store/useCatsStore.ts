import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CatsStoreState } from "./CatsStoreState.ts";
import { Cat } from "../business/models/Cat.ts";
import { filtersInitialState } from "./filterInitialState.ts";
import { Filters } from "../business/models/Filters.ts";

export const useCatsStore = create<CatsStoreState>()(
  devtools(
    (set): CatsStoreState => ({
      cats: [],
      currentPage: 1,
      filters: filtersInitialState,
      saveCats: (cats: Cat[]) => {
        set((state) => ({ ...state, cats: [...cats] }));
      },
      saveCurrentPage: (page: number) => {
        set((state) => ({ ...state, currentPage: page }));
      },
      saveFilters: (filters: Filters) => {
        set((state) => ({
          ...state,
          filters: { ...filters },
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
