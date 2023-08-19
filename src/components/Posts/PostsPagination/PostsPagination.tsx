import { Col, Pagination, PaginationProps, Row, Space } from "antd";
import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const PostsPagination: React.FC = () => {
  const { posts, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  console.log("page", page);
  console.log("limit", limit);
  console.log("total", total);
  const { setPostsPage, setPostsLimitPages } = useActions();

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPostsPage(pageNumber);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPostsPage(current);
    setPostsLimitPages(pageSize);
  };

  useEffect(() => {
    setPostsPage(page);
    setPostsLimitPages(limit);
    console.log("useEffect PostsPagination.tsx fetch pages");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, page, limit]);

  return (
    posts && (
      <Space
        direction="vertical"
        style={{ width: "100%", paddingInline: "50px" }}
        size={[0, 48]}
      >
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <Pagination
              showSizeChanger={false}
              hideOnSinglePage={true}
              onChange={onChange}
              defaultCurrent={page}
              current={page}
              total={total}
              defaultPageSize={limit}
              onShowSizeChange={onShowSizeChange}
            />
          </Col>
        </Row>
      </Space>
    )
  );
};

export default PostsPagination;
