import { IPost } from "../../../models/post";

export interface PostsState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
  total: number;
  limit: number;
  page: number;
}

export enum PostsActionEnum {
  SET_POSTS = "SET_POSTS",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_POSTS_PAGE = "SET_POSTS_PAGE",
  SET_POSTS_TOTAL_PAGES = "SET_POSTS_TOTAL_PAGES",
  SET_POSTS_LIMIT_PAGES = "SET_POSTS_LIMIT_PAGES",
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

export interface SetPostsPage {
  type: PostsActionEnum.SET_POSTS_PAGE;
  payload: number;
}

export interface SetPostsTotalPages {
  type: PostsActionEnum.SET_POSTS_TOTAL_PAGES;
  payload: number;
}

export interface SetPostsLimitPages {
  type: PostsActionEnum.SET_POSTS_LIMIT_PAGES;
  payload: number;
}

export type PostsAction =
  | SetPostsAction
  | SetIsLoadingAction
  | SetErrorAction
  | SetPostsPage
  | SetPostsTotalPages
  | SetPostsLimitPages;
