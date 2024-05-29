import React from "react";
import { Space, Row, Col } from "antd";
// import filter from "../../../store/reducers/filter";
// import PostSearch from "../../PostSearch";
import PostsShowSize from "./PostsShowSize/PostsShowSize";

const index: React.FC = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%" }}
      size={[0, 48]}
      className="page-blog"
    >
      <Row gutter={[16, 24]}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 18 }}>
          {/* <PostSearch filter={filter} setFilter={setFilter} /> */}
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <PostsShowSize />
        </Col>
      </Row>
    </Space>
  );
};

export default index;
