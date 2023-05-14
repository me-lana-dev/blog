import { IPost } from "../../../models/post";

export interface PostState {
  post: IPost;
  isLoading: boolean;
  error: string;
}

export enum PostActionEnum {
  SET_POST = "SET_POST",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
}

export interface SetPostAction {
  type: PostActionEnum.SET_POST;
  payload: IPost;
}

export interface SetIsLoadingAction {
  type: PostActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: PostActionEnum.SET_ERROR;
  payload: string;
}

export type PostAction = SetPostAction | SetIsLoadingAction | SetErrorAction;
