import React from "react";
// import { Card, Layout, Row } from "antd";
// import { useTypedSelector } from "../hooks/useTypedSelector";
// import Posts from "../components/Posts";
import PostsAdmin from "../components/PostsAdmin";

const AdminPage: React.FC = () => {
  //const { user } = useTypedSelector((state) => state.auth);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "50px" }}>Admin</h1>
      <PostsAdmin />
    </>
  );
};

export default AdminPage;
