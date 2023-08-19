import React from "react";
import { Pagination, PaginationProps } from "antd";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

const PostsShowSize: React.FC = () => {
  const { posts, page, limit, total } = useTypedSelector(
    (state) => state.posts
  );
  const { setPostsPage, setPostsLimitPages } = useActions();

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPostsPage(1);
    setPostsLimitPages(pageSize);
  };

  return (
    posts && (
      <Pagination
        className="pagination-top"
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        pageSizeOptions={[20, 36, 52, 100]}
        defaultCurrent={page}
        current={page}
        total={total}
        defaultPageSize={limit}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
      />
    )
  );
};

export default PostsShowSize;
