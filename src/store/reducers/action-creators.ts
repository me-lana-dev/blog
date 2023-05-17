import { AuthActionCreators } from "./auth/action-creators";
import { CommentsActionCreators } from "./comments/action-creators";
import { PostActionCreators } from "./post/action-creators";
import { PostsActionCreators } from "./posts/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...PostsActionCreators,
  ...PostActionCreators,
  ...CommentsActionCreators,
};
