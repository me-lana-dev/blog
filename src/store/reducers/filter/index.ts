import { IFilter } from "../../../models/filter";
import { FilterState, FilterActionEnum, FilterAction } from "./types";

const initialState: FilterState = {
  filter: {} as IFilter,
};

export default function FilterReducer(
  state = initialState,
  action: FilterAction
): FilterState {
  switch (action.type) {
    case FilterActionEnum.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
