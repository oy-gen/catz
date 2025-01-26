import { CatsStoreState } from "../CatsStoreState.ts";

export const pageSelector = (state: CatsStoreState) => ({
  currentPage: state.currentPage,
  saveCurrentPage: state.saveCurrentPage,
});
