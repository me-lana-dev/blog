import { IComment } from "../../../models/comments";

export interface CommentsState {
  comments: IComment[];
  isLoading: boolean;
  error: string;
  postid: string;
}

export enum CommentsActionEnum {
  SET_COMMENTS = "SET_COMMENTS",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_POST_NUMBER = "SET_POST_NUMBER",
}

export interface SetCommentsAction {
  type: CommentsActionEnum.SET_COMMENTS;
  payload: IComment[];
}

export interface SetIsLoadingAction {
  type: CommentsActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: CommentsActionEnum.SET_ERROR;
  payload: string;
}

export interface SetPostNumberAction {
  type: CommentsActionEnum.SET_POST_NUMBER;
  payload: string;
}

export type CommentsAction =
  | SetCommentsAction
  | SetIsLoadingAction
  | SetErrorAction
  | SetPostNumberAction;
