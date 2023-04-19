import { IAddress } from "./address";

export interface IUser {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  address: IAddress;
  phone: string;
}
