import { IFilter } from "../../../models/filter";
import { FilterActionEnum, SetFilterAction } from "./types";

export const FilterActionCreators = {
  setFilter: (filter: IFilter): SetFilterAction => ({
    type: FilterActionEnum.SET_FILTER,
    payload: filter,
  }),
};
