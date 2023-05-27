import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PostsAdmin from "../components/PostsAdmin";
import PostForm from "../components/PostForm";

const AdminPage: React.FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  // console.log(
  //   "adminPage",
  //   "isAuth =",
  //   isAuth,
  //   "user =",
  //   user,
  //   "isLoading =",
  //   isLoading,
  //   "error =",
  //   error
  // );

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Admin {user.username}!
      </h1>
      <PostForm />
      <PostsAdmin />
    </>
  );
};

export default AdminPage;
