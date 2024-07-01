import React, { useState } from "react";
import { Menu } from "antd";
import Search from "./Search";
import Logo from "./Logo";

const items = [
  {
    key: "1",
    label: "지 역 ▾",
    children: [
      {
        key: "11",
        label: "경기도",
      },
      {
        key: "12",
        label: "강원도",
      },
      {
        key: "13",
        label: "충청북도",
      },
      {
        key: "14",
        label: "충청남도",
      },
      {
        key: "15",
        label: "전라북도",
      },
      {
        key: "16",
        label: "전라남도",
      },
      {
        key: "17",
        label: "경상남도",
      },
      {
        key: "18",
        label: "경상북도",
      },
      {
        key: "19",
        label: "제주도",
      },
    ],
  },
  {
    key: "2",
    label: "여행지 추천 ▾",
    children: [
      {
        key: "21",
        label: "맞춤 여행지",
      },
      {
        key: "22",
        label: "가족",
      },
      {
        key: "23",
        label: "친구",
      },
      {
        key: "24",
        label: "연인",
      },
      {
        key: "25",
        label: "나홀로",
      },
      {
        key: "26",
        label: "푸드투어",
      },
      {
        key: "27",
        label: "반려동물",
      },
      {
        key: "28",
        label: "바다 위",
      },
      {
        key: "29",
        label: "산 & 캠핑",
      },
    ],
  },
  {
    key: "3",
    label: "문 의 ▾",
    children: [
      {
        key: "31",
        label: "Q & A",
      },
      {
        key: "32",
        label: "정보 수정 요청",
      },
    ],
  },
];
const NavBar = () => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div style={{ display: "flex", alignItems: "right" }}>
      <div style={{ flex: "1", margin: '0 20px' }}>
        <Logo />
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          height: "100px",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "60px auto",
          flex: "1",
        }}
      ></Menu>
      <div style={{ flex: "1" }}>
        <Search />
      </div>
    </div>
  );
};
export default NavBar;
