import { IPost } from "../../../models/post";

export interface PostsState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

export enum PostsActionEnum {
  SET_POSTS = "SET_POSTS",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
}

export interface SetPostsAction {
  type: PostsActionEnum.SET_POSTS;
  payload: IPost[];
}

export interface SetIsLoadingAction {
  type: PostsActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: PostsActionEnum.SET_ERROR;
  payload: string;
}

export type PostsAction = SetPostsAction | SetIsLoadingAction | SetErrorAction;
