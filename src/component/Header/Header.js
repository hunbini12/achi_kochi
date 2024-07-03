import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "./logo_img/logo.png";

const Header = () => {
  const [hover, sethover] = useState(-1);

  const handleMouseEnter = (num) => {
    sethover(num);
  };

  const handleMouseLeave = () => {
    sethover(-1);
  };

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
              backgroundColor: hover === 1 ? "#F5F5F5" : "white",
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/"
              style={{
                lineHeight: "100px",
                padding: "40px 10px",
                textDecoration: "none",
                color: "#434343",
              }}
            >
              지 역
            </Link>
          </li>
          <li
            style={{
              borderRight: "1px solid #505050",
              width: "20%",
              backgroundColor: hover === 2 ? "#F5F5F5" : "white",
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/2"
              style={{
                lineHeight: "100px",
                padding: "40px 10px",
                textDecoration: "none",
                color: "#434343",
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
              backgroundColor: hover === 3 ? "#F5F5F5" : "white",
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/"
              style={{
                lineHeight: "100px",
                padding: "40px 10px",
                textDecoration: "none",
                color: "#434343",
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
            <Link to="/2">
              <Avatar
                size={55}
                style={{
                  backgroundColor: hover === 4 ? "#87d068" : "#434343",
                  marginLeft: "50px",
                }}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
                icon={<UserOutlined />}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
