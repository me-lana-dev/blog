import { IPost } from "../../../models/post";
import { AppDispatch } from "../..";
import {
  PostsActionEnum,
  SetErrorAction,
  SetIsLoadingAction,
  SetPostsAction,
  SetPostsPage,
  SetPostsTotalPages,
  SetPostsLimitPages,
} from "./types";
import PostsService from "../../../api/PostsService";

export const PostsActionCreators = {
  setPosts: (payload: IPost[]): SetPostsAction => ({
    type: PostsActionEnum.SET_POSTS,
    payload,
  }),
  setPostsTotalPages: (total: number): SetPostsTotalPages => ({
    type: PostsActionEnum.SET_POSTS_TOTAL_PAGES,
    payload: total,
  }),
  setPostsLimitPages: (limit: number): SetPostsLimitPages => ({
    type: PostsActionEnum.SET_POSTS_LIMIT_PAGES,
    payload: limit,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: PostsActionEnum.SET_IS_LOADING,
    payload: payload,
  }),
  fetchPosts:
    (page = 1, limit = 20) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(PostsActionCreators.setIsLoading(true));
        const response = await PostsService.getPosts(page, limit);
        dispatch(PostsActionCreators.setPosts(response.data));
        const xTotalCount = response.headers["x-total-count"];
        dispatch(PostsActionCreators.setPostsTotalPages(xTotalCount));
        dispatch(PostsActionCreators.setIsLoading(false));
        //console.log("fetch", "fetch");
      } catch (e) {
        dispatch(
          PostsActionCreators.setError(
            "Произошла ошибка при загрузке данных..."
          )
        );
      }
      // debugger;
    },
  setPostsPage: (page: number): SetPostsPage => ({
    type: PostsActionEnum.SET_POSTS_PAGE,
    payload: page,
  }),

  setError: (payload: string): SetErrorAction => ({
    type: PostsActionEnum.SET_ERROR,
    payload: payload,
  }),
};
