import { IComment } from "../../../models/comments";
import { AppDispatch } from "../..";
import {
  CommentsActionEnum,
  SetErrorAction,
  SetIsLoadingAction,
  SetCommentsAction,
} from "./types";
import CommentsService from "../../../api/CommentsService";

export const CommentsActionCreators = {
  setComments: (payload: IComment[]): SetCommentsAction => ({
    type: CommentsActionEnum.SET_COMMENTS,
    payload,
  }),
  fetchComments:
    (postid = "1") =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(CommentsActionCreators.setIsLoading(true));
        const response = await CommentsService.getComments(postid);
        dispatch(CommentsActionCreators.setComments(response.data));
        dispatch(CommentsActionCreators.setIsLoading(false));
      } catch (e) {
        dispatch(
          CommentsActionCreators.setError(
            "Произошла ошибка при загрузке данных..."
          )
        );
        dispatch(CommentsActionCreators.setIsLoading(false));
      }
    },
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: CommentsActionEnum.SET_IS_LOADING,
    payload: payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: CommentsActionEnum.SET_ERROR,
    payload: payload,
  }),
};
