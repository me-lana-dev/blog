import { Space, Pagination } from "antd";
import React from "react";

const Pages: React.FC = (props) => {
  console.log("props", props);
  return (
    <Space
      direction="horizontal"
      style={{ width: "100%", paddingBottom: "24px", paddingInline: "50px" }}
      size={[0, 48]}
    >
      <Pagination
        total={100}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={12}
        defaultCurrent={1}
      />
    </Space>
  );
};

export default Pages;
