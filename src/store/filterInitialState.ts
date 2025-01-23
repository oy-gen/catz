import { FilterEnum, Filters } from "../business/models/Filters.ts";

export const filtersInitialState: Filters = {
  [FilterEnum.All]: true,
  [FilterEnum.Orange]: false,
  [FilterEnum.Black]: false,
  [FilterEnum.White]: false,
};
