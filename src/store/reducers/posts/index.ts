// import { IPost } from "../../../models/post";
import { PostsAction, PostsActionEnum, PostsState } from "./types";

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: "",
  limit: 20,
  total: 20,
  page: 1,
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
    case PostsActionEnum.SET_POSTS_PAGE:
      return { ...state, page: action.payload };
    case PostsActionEnum.SET_POSTS_TOTAL_PAGES:
      return { ...state, total: action.payload };
    default:
      return state;
  }
}
