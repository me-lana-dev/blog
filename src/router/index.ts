import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/PostsPage";
import Post from "../pages/PostPage";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

export interface IRoute {
  path: string;
  index?: boolean;
  element: React.ComponentType;
}

export interface INavigate {
  to: string;
  replace: boolean;
}

export enum RouteNames {
  HOME = "/",
  ABOUT = "/about",
  POSTS = "/posts",
  POST = "/posts/:id",
  CONTACTS = "/contacts",
  LOGIN = "/login",
  ADMIN = "/admin",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: Home, index: true },
  { path: RouteNames.ABOUT, element: About },
  { path: RouteNames.POSTS, element: Posts },
  { path: RouteNames.POST, element: Post },
  { path: RouteNames.CONTACTS, element: Contacts },
  { path: RouteNames.LOGIN, element: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: Home, index: true },
  { path: RouteNames.ABOUT, element: About },
  { path: RouteNames.POSTS, element: Posts },
  { path: RouteNames.POST, element: Post },
  { path: RouteNames.CONTACTS, element: Contacts },
  { path: RouteNames.ADMIN, element: Admin },
];
