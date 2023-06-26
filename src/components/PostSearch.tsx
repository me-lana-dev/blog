import React from "react";
import { Input } from "antd";

interface searchProps {
  filter: {
    query?: string;
  };
  setFilter: (e: any) => void;
}

const PostSearch = ({ filter, setFilter }: searchProps) => {
  const { Search } = Input;
  return (
    <Search
      // style={{ marginLeft: "20px" }}
      placeholder="Search post title..."
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      enterButton
    />
  );
};

export default PostSearch;
