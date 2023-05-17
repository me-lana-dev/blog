import axios, { AxiosResponse } from "axios";
import { IComment } from "../models/comments";

export default class PostsService {
  static async getComments(postid: string): Promise<AxiosResponse<IComment[]>> {
    return axios.get<IComment[]>(
      `https://jsonplaceholder.typicode.com/posts/${postid}/comments`
    );
  }
}
