import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Card, Col, Row, Space, Spin } from "antd";

const Comments: React.FC = () => {
  const { comments, error, isLoading } = useTypedSelector(
    (state) => state.comments
  );
  //console.log(error, "isLoading comments", isLoading);
  const { id } = useParams();
  const { fetchComments } = useActions();

  useEffect(() => {
    //console.log("fetch comments");
    fetchComments(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return (
      <Space
        direction="horizontal"
        style={{
          width: "100%",
          paddingTop: "24px",
          paddingBottom: "24px",
          paddingInline: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={[0, 48]}
      >
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          <Col span={24}>
            <Spin size="large" />
          </Col>
        </Row>
      </Space>
    );
  }

  if (error) {
    return (
      <Space
        direction="horizontal"
        style={{
          width: "100%",
          paddingTop: "24px",
          paddingBottom: "24px",
          paddingInline: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={[0, 48]}
      >
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          <Col span={24}>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                minHeight: "100%",
              }}
            >
              <span>{error}</span>
            </Card>
          </Col>
        </Row>
      </Space>
    );
  }

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "50px" }}>Comments</h2>

      <Space
        direction="horizontal"
        style={{
          width: "100%",
          paddingBottom: "24px",
          paddingInline: "50px",
          justifyContent: "center",
        }}
        size={[0, 48]}
      >
        <Row justify="space-between" align="stretch" gutter={[16, 24]}>
          <Col span={24}>
            {comments &&
              comments.map((comment) => (
                <Card
                  title={comment.name}
                  extra={
                    <a href={"mailto:" + comment.email}>{comment.email}</a>
                  }
                  style={{ minWidth: "100%", marginBottom: "24px" }}
                  key={comment.id}
                >
                  <div>
                    {comment.id}. {comment.body}
                  </div>
                </Card>
              ))}
            {!comments && <p>Comments empty.</p>}
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default Comments;
