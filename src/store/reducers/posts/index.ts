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
      let posts = { ...state, posts: action.payload };
      //console.log(posts);
      return posts;
    case PostsActionEnum.SET_IS_LOADING:
      let p2 = { ...state, isLoading: action.payload };
      //console.log("p2", p2);
      return p2;
    case PostsActionEnum.SET_ERROR:
      let p3 = { ...state, error: action.payload, isLoading: false };
      //console.log("p3", p3);
      return p3;
    case PostsActionEnum.SET_POSTS_PAGE:
      let p4 = { ...state, page: action.payload };
      //console.log("p4", p4);
      return p4;
    case PostsActionEnum.SET_POSTS_TOTAL_PAGES:
      let p5 = { ...state, total: action.payload };
      //console.log("p5", p5);
      return p5;
    case PostsActionEnum.SET_POSTS_LIMIT_PAGES:
      let p6 = { ...state, limit: action.payload };
      //console.log("p5", p5);
      return p6;
    default:
      return state;
  }
}
