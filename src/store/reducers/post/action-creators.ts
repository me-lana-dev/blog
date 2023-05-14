import { IPost } from "../../../models/post";
import { AppDispatch } from "../..";
import PostService from "../../../api/PostService";
import {
  PostActionEnum,
  SetPostAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";

export const PostActionCreators = {
  setPost: (post: IPost): SetPostAction => ({
    type: PostActionEnum.SET_POST,
    payload: post,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: PostActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: PostActionEnum.SET_ERROR,
    payload,
  }),
  fetchPost: (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(PostActionCreators.setIsLoading(true));
      const response = await PostService.getPost(id);
      const postData = response.data;
      console.log(postData);
      dispatch(PostActionCreators.setPost(postData));
      dispatch(PostActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(
        PostActionCreators.setError("Произошла ошибка при загрузке данных...")
      );
      dispatch(PostActionCreators.setIsLoading(false));
    }
  },
};
