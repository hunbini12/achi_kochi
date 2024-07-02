import React from "react";
import ImageList from "./ImageList";
import Header from "../Header/Header";
import SideMenu from "./SideMenu";

const Index2 = () => {
  return (
    <div>
      <Header />
      <div style={{float: 'left'}}><SideMenu /></div>
      <ImageList />
    </div>
  );
};

export default Index2;
