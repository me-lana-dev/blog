import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/post";

export default class UserService {
  static async getPosts(): Promise<AxiosResponse<IPost[]>> {
    return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
