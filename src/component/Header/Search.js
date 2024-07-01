import React from "react";
import { AutoComplete, Input } from "antd";

const Search = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    popupMatchSelectWidth={500}
    style={{
      width: 250,
      marginBottom: "20px",
    }}
    size="large"
  >
    <Input.Search size="large" placeholder="검 색" />
  </AutoComplete>
);
export default Search;
