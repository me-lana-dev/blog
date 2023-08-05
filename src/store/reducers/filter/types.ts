import { IFilter } from "../../../models/filter";

export interface FilterState {
  filter: IFilter;
}

export enum FilterActionEnum {
  SET_FILTER = "SET_FILTER",
}

export interface SetFilterAction {
  type: FilterActionEnum.SET_FILTER;
  payload: IFilter;
}

export type FilterAction = SetFilterAction;
