import { CatsStoreState } from "../CatsStoreState.ts";

export const catsSelector = (state: CatsStoreState) => ({
  cats: state.cats,
  saveCats: state.saveCats,
});
