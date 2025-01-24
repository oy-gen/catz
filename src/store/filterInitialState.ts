import { Filters } from "../business/models/Filters.ts";
import { FilterEnum } from "../business/models/FilterEnum.ts";

export const filtersInitialState: Filters = {
  [FilterEnum.All]: true,
  [FilterEnum.Orange]: false,
  [FilterEnum.Black]: false,
  [FilterEnum.White]: false,
};
