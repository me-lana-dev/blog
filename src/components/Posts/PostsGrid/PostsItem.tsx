import React from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import { IPost } from "../../../models/post";

type PostsItemProps = {
  post: IPost;
  key: number;
};

const PostsItem: React.FC<PostsItemProps> = ({ post }) => {
  const { Meta } = Card;

  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100%",
        }}
      >
        <div className="ant-card-number" style={{ marginRight: "16px" }}>
          {post.id}.
        </div>
        <Link
          to={"/posts/" + post.id}
          state={{ currentlink: "posts" }}
          className="ant-card-link"
        >
          {post.title}
        </Link>
        <Meta description={post.body} />
      </Card>
    </Col>
  );
};

export default PostsItem;
