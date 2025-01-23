import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CatsStoreState } from "./CatsStoreState.ts";
import { filtersInitialState } from "./filterInitialState.ts";
import { Cat } from "../business/models/Cat.ts";
import { Filters } from "../business/models/Filters.ts";
import { CatImage } from "../business/models/CatImage.ts";

export const useCatsStore = create<CatsStoreState>()(
  devtools(
    (set, get): CatsStoreState => ({
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
      saveCatImageToStore: (catImage: CatImage) => {
        set((state) => ({
          ...state,
          catImages: [...state.catImages, catImage],
        }));
      },
      getCatImageById: (id: string) => {
        const catImages: CatImage[] = get().catImages;
        const result = catImages.find((catImageData) => catImageData[id]);
        return result ? result[id] : null;
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
