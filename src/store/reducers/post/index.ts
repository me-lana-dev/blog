import { IPost } from "../../../models/post";
import { PostAction, PostActionEnum, PostState } from "./types";

const initialState: PostState = {
  post: {} as IPost,
  isLoading: false,
  error: "",
};

export default function PostReducer(state = initialState, action: PostAction) {
  switch (action.type) {
    case PostActionEnum.SET_POST:
      let post = { ...state, post: action.payload };
      return post;
    case PostActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case PostActionEnum.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
