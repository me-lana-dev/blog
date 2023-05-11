import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/post";

export default class UserService {
  static async getPosts(
    page: number,
    limit: number
  ): Promise<AxiosResponse<IPost[]>> {
    return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
      params: { _page: page, _limit: limit },
    });
  }
}
