import { FilterEnum, Filters } from "../business/models/FilterType.ts";

export const filtersInitialState: Filters = {
  [FilterEnum.All]: true,
  [FilterEnum.Orange]: false,
  [FilterEnum.Black]: false,
  [FilterEnum.White]: false,
};
