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
      page: 1,
      filters: filtersInitialState,
      catImages: [],
      saveCatsToStore: (cats: Cat[]) => {
        console.log({ cats });
        set((state) => ({ ...state, cats: [...cats] }));
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
      name: "AppStore",
      enabled: true,
    },
  ),
);
