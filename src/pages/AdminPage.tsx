import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PostsAdmin from "../components/PostsAdmin";

const AdminPage: React.FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  //console.log(isAuth, user);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Admin {user.name}!
      </h1>
      <PostsAdmin />
    </>
  );
};

export default AdminPage;
