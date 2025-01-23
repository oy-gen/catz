export enum FilterEnum {
  All = "All",
  Black = "Black",
  White = "White",
  Orange = "Orange",
}

export type Filters = Record<FilterEnum, boolean>;
