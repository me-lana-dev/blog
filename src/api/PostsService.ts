import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/post";

export default class PostsService {
  static async getPosts(
    query?: string,
    page?: number,
    limit?: number
  ): Promise<AxiosResponse<IPost[]>> {
    return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
      params: { title_like: query, _page: page, _limit: limit },
    });
  }

  static async getPostsUser(
    page: number,
    limit: number,
    userid: number
  ): Promise<AxiosResponse<IPost[]>> {
    return axios.get<IPost[]>(
      `https://jsonplaceholder.typicode.com/users/${userid}/posts`,
      {
        params: { _page: page, _limit: limit },
      }
    );
  }
}
