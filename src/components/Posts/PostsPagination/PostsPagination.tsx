import { Col, Pagination, PaginationProps, Row, Space } from "antd";
import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const PostsPagination: React.FC = () => {
  const { posts, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  const { setPostsPage, setPostsLimitPages } = useActions();

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPostsPage(pageNumber);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPostsPage(1);
    setPostsLimitPages(pageSize);
  };

  useEffect(() => {
    setPostsPage(page);
    setPostsLimitPages(limit);
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
              onShowSizeChange={onShowSizeChange}
              pageSizeOptions={[20, 36, 52, 100]}
              hideOnSinglePage={true}
              onChange={onChange}
              defaultCurrent={page}
              current={page}
              total={total}
              pageSize={limit}
              defaultPageSize={limit}
            />
          </Col>
        </Row>
      </Space>
    )
  );
};

export default PostsPagination;
