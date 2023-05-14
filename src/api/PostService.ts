import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/post";

export default class PostService {
  static async getPost(id: number): Promise<AxiosResponse<IPost>> {
    return axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
