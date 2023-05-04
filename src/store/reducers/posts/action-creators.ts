import { IPost } from "../../../models/post";
import { AppDispatch } from "../..";
import {
  PostsActionEnum,
  SetErrorAction,
  SetIsLoadingAction,
  SetPostsAction,
} from "./types";
import PostsService from "../../../api/PostsService";

export const PostsActionCreators = {
  setPosts: (payload: IPost[]): SetPostsAction => ({
    type: PostsActionEnum.SET_POSTS,
    payload,
  }),
  fetchPosts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(PostsActionCreators.setIsLoading(true));
      const response = await PostsService.getPosts();
      dispatch(PostsActionCreators.setPosts(response.data));
      dispatch(PostsActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(PostsActionCreators.setError("Произошла ошибка при логине"));
    }
  },
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: PostsActionEnum.SET_IS_LOADING,
    payload: payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: PostsActionEnum.SET_ERROR,
    payload: payload,
  }),
};
