// import { IPost } from "../../../models/post";
import { PostsAction, PostsActionEnum, PostsState } from "./types";

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: "",
};

export default function PostsReducer(
  state = initialState,
  action: PostsAction
) {
  switch (action.type) {
    case PostsActionEnum.SET_POSTS:
      return { ...state, posts: action.payload };
    case PostsActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: true };
    case PostsActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
