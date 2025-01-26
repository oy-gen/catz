import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CatsStoreState } from "./CatsStoreState.ts";
import { Cat } from "../business/models/Cat.ts";
import { filtersInitialState } from "./filterInitialState.ts";
import { Filters } from "../business/models/Filters.ts";
import { useShallow } from "zustand/react/shallow";

const useStore = create<CatsStoreState>()(
  devtools(
    (set): CatsStoreState => ({
      cats: [],
      currentPage: 1,
      filters: filtersInitialState,
      saveCats: (cats: Cat[]) => {
        set({ cats: [...cats] });
      },
      saveCurrentPage: (page: number) => {
        set((state) => {
          if (state.currentPage === page) return state; // Avoid unnecessary updates
          return { currentPage: page };
        });
      },
      saveFilters: (filters: Filters) => {
        set((state) => {
          if (state.filters === filters) return state; // Avoid unnecessary updates
          return { filters: { ...filters } };
        });
      },
      resetFilters: () => {
        set({
          filters: filtersInitialState,
        });
      },
    }),
    {
      name: "Redux DevTools",
      enabled: true,
    },
  ),
);

export const useCatsStore = <T>(selector: (state: CatsStoreState) => T): T => {
  return useStore(useShallow(selector));
};
