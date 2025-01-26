import { CatsStoreState } from "../CatsStoreState.ts";

export const filterSelector = (state: CatsStoreState) => ({
  filters: state.filters,
  resetFilters: state.resetFilters,
  saveFilters: state.saveFilters,
});
