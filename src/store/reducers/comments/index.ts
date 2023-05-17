// import { IPost } from "../../../models/post";
import { CommentsAction, CommentsActionEnum, CommentsState } from "./types";

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  error: "",
  postid: "",
};

export default function CommentsReducer(
  state = initialState,
  action: CommentsAction
) {
  switch (action.type) {
    case CommentsActionEnum.SET_COMMENTS:
      let comments = { ...state, comments: action.payload };
      //console.log(posts);
      return comments;
    case CommentsActionEnum.SET_IS_LOADING:
      let p2 = { ...state, isLoading: action.payload };
      //console.log("p2", p2);
      return p2;
    case CommentsActionEnum.SET_ERROR:
      let p3 = { ...state, error: action.payload };
      //console.log("p3", p3);
      return p3;
    case CommentsActionEnum.SET_POST_NUMBER:
      let p4 = { ...state, postid: action.payload };
      //console.log("p4", p4);
      return p4;
    default:
      return state;
  }
}
