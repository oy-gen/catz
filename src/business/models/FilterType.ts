export enum FilterEnum {
  All = "all",
  Black = "black",
  White = "white",
  Orange = "orange",
}

export type Filters = Record<FilterEnum, boolean>;
