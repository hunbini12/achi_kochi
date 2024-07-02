import { Menu } from "antd";
import React from "react";

const menuItems = [
  { key: "menu1", title: "가족과 함께" },
  { key: "menu2", title: "친구와 함께" },
  { key: "menu3", title: "연인과 함께" },
  { key: "menu4", title: "혼자 여행" },
  { key: "menu5", title: "맛집 투어" },
  { key: "menu6", title: "펫 투어" },
  { key: "menu7", title: "바다" },
  { key: "menu8", title: "산 과 캠핑" },
];

const SideMenu = () => (
  <Menu
    style={{
      width: 315,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "17px",
      fontfamily: "Arial, sansserif",
      marginLeft: "20px",
      borderRight: "1px solid",
    }}
    mode="vertical"
  >
    <Menu.Item
      key="menu0"
      style={{
        border: "2px solid black",
        margin: "30px auto",
        color: "limegreen",
        height: "60px",
        fontSize: "25px",
        lineHeight: "50px",
        width: '270px',

      }}
    >
      내 추천 여행지
    </Menu.Item>
    {menuItems.map((item) => (
      <Menu.Item
        key={item.key}
        style={{
          border: "1px solid",
          borderRadius: "0",
          margin: "0 auto",
          height: "80px",
          lineHeight: "80px",
          width: "200px",
        }}
      >
        {item.title}
      </Menu.Item>
    ))}
  </Menu>
);
export default SideMenu;
