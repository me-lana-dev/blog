import { AuthActionCreators } from "./auth/action-creators";
import { PostsActionCreators } from "./posts/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...PostsActionCreators,
};
