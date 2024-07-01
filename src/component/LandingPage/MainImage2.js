import React from "react";
import main_img1 from "./main_img/날씨.jpg";
import main_img2 from "./main_img/준비물.png";
import main_img3 from "./main_img/축제1.jpg";

const MainImage2 = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: "225px",
        marginTop: "50px",
      }}
    >
      <ul
        style={{
          position: "relative",
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <li style={{ float: "left", width: "450px", position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                position: "relative",
                display: "block",
                width: "450px",
                height: "225px",
              }}
            >
              <img
                src={main_img1}
                alt="날씨 / 후기"
                style={{
                  position: "absolute",
                  width: "auto",
                  height: "100%",
                  borderRadius: "2%",
                }}
              />
              <em
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  display: "flex",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1",
                  fontSize: "40px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                날씨/후기
              </em>
            </span>
          </a>
        </li>
        <li style={{ float: "left", width: "450px", position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                position: "relative",
                display: "block",
                width: "450px",
                height: "225px",
              }}
            >
              <img
                src={main_img2}
                alt="준비물 / 꿀팁"
                style={{
                  position: "absolute",
                  width: "auto",
                  height: "100%",
                  borderRadius: "2%",
                }}
              />
              <em
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  display: "flex",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1",
                  fontSize: "40px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                준비물/꿀팁
              </em>
            </span>
          </a>
        </li>
        <li style={{ float: "left", width: "450px", position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                position: "relative",
                display: "block",
                width: "450px",
                height: "225px",
              }}
            >
              <img
                src={main_img3}
                alt="시즌 축제"
                style={{
                  position: "absolute",
                  width: "auto",
                  height: "100%",
                  borderRadius: "2%",
                }}
              />
              <em
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  display: "flex",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1",
                  fontSize: "40px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                시즌 축제
              </em>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainImage2;
