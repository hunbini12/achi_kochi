import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "./logo_img/logo.png";

const Header = () => {
  return (
    <header style={{ left: "0", top: "0", width: "100%", height: "130px" }}>
      <nav style={{ borderBottom: "1px solid #505050", margin: "0 20px" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            margin: "10px 0 10px 40px",
            padding: "0",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            height: "100px",
            alignItems: "center",
          }}
        >
          <li
            style={{
              borderRight: "1px solid #505050",
              width: "20%",
            }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="로고"
                style={{ width: 95, margin: "0 auto" }}
              />
            </Link>
          </li>
          <li
            style={{
              borderRight: "1px solid #505050",
              width: "20%",
            }}
          >
            <Link
              to="/"
              style={{
                lineHeight: "100px",
                padding: "40px 10px",
                textDecoration: "none",
              }}
            >
              지 역
            </Link>
          </li>
          <li
            style={{
              borderRight: "1px solid #505050",
              width: "20%",
            }}
          >
            <Link
              to="/2"
              style={{
                lineHeight: "100px",
                padding: "40px 10px",
                textDecoration: "none",
              }}
              className="link"
            >
              추천
            </Link>
          </li>
          <li
            style={{
              borderRight: "1px solid #505050",
              width: "20%",
            }}
          >
            <Link
              to="/"
              style={{
                lineHeight: "100px",
                padding: "40px auto",
                textDecoration: "none",
              }}
            >
              문 의
            </Link>
          </li>
          <li
            style={{
              width: "30%",
              padding: "0 50px",
            }}
          >
            <Search />
            <Avatar
              size={55}
              style={{
                backgroundColor: "#87d068",
                marginLeft: "50px",
              }}
              icon={<UserOutlined />}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
